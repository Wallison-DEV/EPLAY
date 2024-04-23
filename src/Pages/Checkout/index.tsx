import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'
import { Navigate } from 'react-router-dom'

import Button from '../../Components/Button'
import Card from '../../Components/Card'

import * as S from './styles'

import barCodeImg from '../../assets/icons/boleto.png'
import creditPng from '../../assets/icons/credito.png'

import { usePurchaseMutation } from '../../services/api'
import { RootReducer } from '../../store'
import { clear } from '../../store/reducers/cart'
import { getTotalPrice, parseToBrl } from '../../utils'

type Installment = {
    quantity: number
    amount: number
    formattedAmount: string
}

const Checkout = () => {
    const [payWithCard, setPayWithCard] = useState(false)
    const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
    const { items } = useSelector((state: RootReducer) => state.cart)
    const [installments, setInstallments] = useState<Installment[]>()
    const dispatch = useDispatch()

    const handlePaymentChange = (useCard: boolean) => {
        setPayWithCard(useCard)
        form.resetForm()
    }
    const totalPrice = getTotalPrice(items)

    function parseValue(value: string): string {
        return value.replace(/\D/g, '')
    }

    const form = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            cpf: '',
            deliveryEmail: '',
            confirmDeliveryEmail: '',
            cardOwner: '',
            cpfCardOwner: '',
            cardDisplayName: '',
            cardNumber: '',
            expiresYear: '',
            expiresMonth: '',
            cardCode: '',
            installments: 1,
        },
        validationSchema: Yup.object({
            fullName: Yup.string()
                .min(5, 'O nome precisa ter pelo menos 5 caracteres')
                .required('O campo é obrigatório'),
            cpf: Yup.string()
                .transform((value) => parseValue(value))
                .length(11, 'O CPF deve ter exatamente 11 dígitos')
                .required('O campo é obrigatório'),
            email: Yup.string()
                .email('O email é inválido')
                .required('O campo é obrigatório'),
            deliveryEmail: Yup.string()
                .email('O email é inválido')
                .required('O campo é obrigatório'),
            confirmDeliveryEmail: Yup.string()
                .oneOf([Yup.ref('deliveryEmail')], 'Os e-mails são diferentes')
                .required('O campo é obrigatório'),

            cardOwner: Yup.string().when((_values, schema) =>
                payWithCard ? schema.required('O campo é obrigatório') : schema
            ),
            cpfCardOwner: Yup.string()
                .transform((value) => parseValue(value))
                .length(11, 'O CPF deve ter exatamente 11 dígitos')
                .required('O campo é obrigatório')
                .when((_values, schema) =>
                    payWithCard
                        ? schema.required('O campo é obrigatório')
                        : schema
                ),
            cardDisplayName: Yup.string().when((_values, schema) =>
                payWithCard ? schema.required('O campo é obrigatório') : schema
            ),
            cardNumber: Yup.string()
                .transform((value) => parseValue(value))
                .length(16, 'O número do cartão deve ter exatamente 16 dígitos')
                .required('O campo é obrigatório')
                .when((_values, schema) =>
                    payWithCard
                        ? schema.required('O campo é obrigatório')
                        : schema
                ),
            expiresYear: Yup.string().when((_values, schema) =>
                payWithCard ? schema.required('O campo é obrigatório') : schema
            ),
            expiresMonth: Yup.string().when((_values, schema) =>
                payWithCard ? schema.required('O campo é obrigatório') : schema
            ),
            cardCode: Yup.string().when((_values, schema) =>
                payWithCard ? schema.required('O campo é obrigatório') : schema
            ),
            installments: Yup.number().when((_values, schema) =>
                payWithCard ? schema.required('O campo é obrigatório') : schema
            ),
        }),
        onSubmit: (values) => {
            purchase({
                products: items.map((item) => ({
                    id: item.id,
                    price: item.prices.current as number,
                })),
                billing: {
                    name: values.fullName,
                    email: values.email,
                    document: values.cpf,
                },
                delivery: {
                    email: values.deliveryEmail,
                },
                payment: {
                    installments: values.installments,
                    card: {
                        active: payWithCard,
                        owner: {
                            name: values.cardOwner,
                            document: values.cpfCardOwner,
                        },
                        name: values.cardDisplayName,
                        number: values.cardNumber,
                        expires: {
                            month: Number(values.expiresMonth),
                            year: Number(values.expiresYear),
                        },
                        code: Number(values.cardCode),
                    },
                },
            })
        },
    })

    useEffect(() => {
        if (totalPrice > 0) {
            const calculateInstallments = () => {
                const installmentArray: Installment[] = []
                for (let i = 1; i <= 6; i++) {
                    installmentArray.push({
                        quantity: i,
                        amount: totalPrice / i,
                        formattedAmount: parseToBrl(totalPrice / i),
                    })
                }
                return installmentArray
            }
            setInstallments(calculateInstallments())
        }
    }, [totalPrice])
    useEffect(() => {
        if (isSuccess) {
            dispatch(clear())
        }
    }, [isSuccess, dispatch])

    const checkInputHasError = (fieldName: string) => {
        const isTouched = fieldName in form.touched
        const isValid = fieldName in form.errors
        const hasError = isTouched && isValid

        return hasError
    }

    if (items.length === 0 && isSuccess === false) {
        return <Navigate to="/" />
    }

    return (
        <div className="container">
            {isSuccess && data ? (
                <Card title="Muito Obrigado">
                    <>
                        <p>
                            É com satisfação que informamos que recebemos seu
                            pedido com sucesso! <br />
                            Abaixo estão os detalhes da sua compra:
                            <br />
                            Número do pedido: {data.orderId}
                            <br />
                            Forma de pagamento:{' '}
                            {payWithCard
                                ? 'Cartão de crédito'
                                : 'Boleto bancário'}
                        </p>
                        <p className="margin-top">
                            Caso tenha optado pelo pagamento via boleto
                            bancário, lembre-se de que a confirmação pode levar
                            até 3 dias úteis. <br />
                            Após a aprovação do pagamento, enviaremos um e-mail
                            contendo o código de ativação do jogo.
                        </p>
                        <p className="margin-top">
                            Se você optou pelo pagamento com cartão de crédito,
                            a liberação do código de ativação ocorrerá após a
                            aprovação da transação pela operadora do cartão.
                            Você receberá o código no e-mail cadastrado em nossa
                            loja.
                        </p>
                        <p className="margin-top">
                            Pedimos que verifique sua caixa de entrada e a pasta
                            de spam para garantir que receba nossa comunicação.
                            <br />
                            Caso tenha alguma dúvida ou necessite de mais
                            informações, por favor, entre em contato conosco
                            através dos nossos canais de atendimento ao cliente.
                        </p>
                        <p className="margin-top">
                            Agradecemos por escolher a EPLAY e esperamos que
                            desfrute do seu jogo!
                        </p>
                    </>
                </Card>
            ) : (
                <form onSubmit={form.handleSubmit}>
                    <Card title="Dados de cobrança">
                        <>
                            <S.Row>
                                <S.InputGroup>
                                    <label htmlFor="name">Nome completo</label>
                                    <input
                                        id="name"
                                        type="text"
                                        name="fullName"
                                        value={form.values.fullName}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        className={
                                            checkInputHasError('fullName')
                                                ? 'error'
                                                : ''
                                        }
                                    />
                                </S.InputGroup>
                                <S.InputGroup>
                                    <label htmlFor="email">E-mail</label>
                                    <input
                                        id="email"
                                        type="text"
                                        name="email"
                                        onChange={form.handleChange}
                                        value={form.values.email}
                                        onBlur={form.handleBlur}
                                        className={
                                            checkInputHasError('email')
                                                ? 'error'
                                                : ''
                                        }
                                    />
                                </S.InputGroup>
                                <S.InputGroup>
                                    <label htmlFor="cpf">CPF</label>
                                    <InputMask
                                        mask="999.999.999-99"
                                        id="cpf"
                                        type="text"
                                        name="cpf"
                                        onChange={form.handleChange}
                                        value={form.values.cpf}
                                        onBlur={form.handleBlur}
                                        className={
                                            checkInputHasError('cpf')
                                                ? 'error'
                                                : ''
                                        }
                                    />
                                </S.InputGroup>
                            </S.Row>
                            <h3 className="margin-top">
                                Dados de entrega - conteúdo digital
                            </h3>
                            <S.Row>
                                <S.InputGroup>
                                    <label htmlFor="deliveryEmail">
                                        E-mail
                                    </label>
                                    <input
                                        id="deliveryEmail"
                                        type="text"
                                        name="deliveryEmail"
                                        onChange={form.handleChange}
                                        value={form.values.deliveryEmail}
                                        onBlur={form.handleBlur}
                                        className={
                                            checkInputHasError('deliveryEmail')
                                                ? 'error'
                                                : ''
                                        }
                                    />
                                </S.InputGroup>
                                <S.InputGroup>
                                    <label htmlFor="confirmDeliveryEmail">
                                        Confirme o e-mail
                                    </label>
                                    <input
                                        id="confirmDeliveryEmail"
                                        type="text"
                                        name="confirmDeliveryEmail"
                                        onChange={form.handleChange}
                                        value={form.values.confirmDeliveryEmail}
                                        onBlur={form.handleBlur}
                                        className={
                                            checkInputHasError(
                                                'confirmDeliveryEmail'
                                            )
                                                ? 'error'
                                                : ''
                                        }
                                    />
                                </S.InputGroup>
                            </S.Row>
                        </>
                    </Card>
                    <Card title="Pagamento">
                        <>
                            <S.TabButton
                                isactive={!payWithCard}
                                onClick={() => handlePaymentChange(false)}
                                type="button"
                            >
                                <img src={barCodeImg} alt="Boleto" />
                                Boleto bancário
                            </S.TabButton>
                            <S.TabButton
                                isactive={payWithCard}
                                onClick={() => handlePaymentChange(true)}
                                type="button"
                            >
                                <img src={creditPng} alt="Cartão de crédito" />
                                Cartão de crédito
                            </S.TabButton>
                            <div className="margin-top">
                                {payWithCard ? (
                                    <>
                                        <S.Row>
                                            <S.InputGroup>
                                                <label htmlFor="cardOwner">
                                                    Nome do titular do cartão
                                                </label>
                                                <input
                                                    id="cardOwner"
                                                    type="text"
                                                    name="cardOwner"
                                                    onChange={form.handleChange}
                                                    value={
                                                        form.values.cardOwner
                                                    }
                                                    onBlur={form.handleBlur}
                                                    className={
                                                        checkInputHasError(
                                                            'cardOwner'
                                                        )
                                                            ? 'error'
                                                            : ''
                                                    }
                                                />
                                            </S.InputGroup>
                                            <S.InputGroup>
                                                <label htmlFor="cpfCardOwner">
                                                    Cpf do titular do cartão
                                                </label>
                                                <InputMask
                                                    mask="999.999.999-99"
                                                    id="cpfCardOwner"
                                                    type="text"
                                                    name="cpfCardOwner"
                                                    onChange={form.handleChange}
                                                    value={
                                                        form.values.cpfCardOwner
                                                    }
                                                    onBlur={form.handleBlur}
                                                    className={
                                                        checkInputHasError(
                                                            'cpfCardOwner'
                                                        )
                                                            ? 'error'
                                                            : ''
                                                    }
                                                />
                                            </S.InputGroup>
                                        </S.Row>
                                        <S.Row marginTop="24px">
                                            <S.InputGroup>
                                                <label htmlFor="cardDisplayName">
                                                    Nome no cartão
                                                </label>
                                                <input
                                                    id="cardDisplayName"
                                                    type="text"
                                                    name="cardDisplayName"
                                                    onChange={form.handleChange}
                                                    value={
                                                        form.values
                                                            .cardDisplayName
                                                    }
                                                    onBlur={form.handleBlur}
                                                    className={
                                                        checkInputHasError(
                                                            'cardDisplayName'
                                                        )
                                                            ? 'error'
                                                            : ''
                                                    }
                                                />
                                            </S.InputGroup>
                                            <S.InputGroup>
                                                <label htmlFor="cardNumber">
                                                    Número no cartão
                                                </label>
                                                <InputMask
                                                    mask="9999 9999 9999 9999"
                                                    id="cardNumber"
                                                    type="text"
                                                    name="cardNumber"
                                                    onChange={form.handleChange}
                                                    value={
                                                        form.values.cardNumber
                                                    }
                                                    onBlur={form.handleBlur}
                                                    className={
                                                        checkInputHasError(
                                                            'cardNumber'
                                                        )
                                                            ? 'error'
                                                            : ''
                                                    }
                                                />
                                            </S.InputGroup>
                                            <S.InputGroup maxWidth="123px">
                                                <label htmlFor="expiresMonth">
                                                    Mês do expiração
                                                </label>
                                                <InputMask
                                                    id="expiresMonth"
                                                    type="text"
                                                    name="expiresMonth"
                                                    onChange={form.handleChange}
                                                    value={
                                                        form.values.expiresMonth
                                                    }
                                                    onBlur={form.handleBlur}
                                                    className={
                                                        checkInputHasError(
                                                            'expiresMonth'
                                                        )
                                                            ? 'error'
                                                            : ''
                                                    }
                                                    mask="99"
                                                />
                                            </S.InputGroup>
                                            <S.InputGroup maxWidth="123px">
                                                <label htmlFor="expiresYear">
                                                    Ano de expiração
                                                </label>
                                                <InputMask
                                                    id="expiresYear"
                                                    type="text"
                                                    name="expiresYear"
                                                    onChange={form.handleChange}
                                                    value={
                                                        form.values.expiresYear
                                                    }
                                                    onBlur={form.handleBlur}
                                                    className={
                                                        checkInputHasError(
                                                            'expiresYear'
                                                        )
                                                            ? 'error'
                                                            : ''
                                                    }
                                                    mask="99"
                                                />
                                            </S.InputGroup>
                                            <S.InputGroup maxWidth="48px">
                                                <label htmlFor="cardCode">
                                                    CVV
                                                </label>
                                                <InputMask
                                                    id="cardCode"
                                                    type="text"
                                                    name="cardCode"
                                                    onChange={form.handleChange}
                                                    value={form.values.cardCode}
                                                    onBlur={form.handleBlur}
                                                    className={
                                                        checkInputHasError(
                                                            'cardCode'
                                                        )
                                                            ? 'error'
                                                            : ''
                                                    }
                                                    mask="999"
                                                />
                                            </S.InputGroup>
                                        </S.Row>
                                        <S.Row marginTop="24px">
                                            <S.InputGroup maxWidth="150px">
                                                <label htmlFor="installments">
                                                    Parcelamento
                                                </label>
                                                <select
                                                    id="installments"
                                                    name="installments"
                                                    onChange={form.handleChange}
                                                    value={
                                                        form.values.installments
                                                    }
                                                    onBlur={form.handleBlur}
                                                    className={
                                                        checkInputHasError(
                                                            'installments'
                                                        )
                                                            ? 'error'
                                                            : ''
                                                    }
                                                >
                                                    {installments?.map(
                                                        (installment) => (
                                                            <option
                                                                value={
                                                                    installment.quantity
                                                                }
                                                                key={
                                                                    installment.quantity
                                                                }
                                                            >
                                                                {
                                                                    installment.quantity
                                                                }
                                                                x de{' '}
                                                                {
                                                                    installment.formattedAmount
                                                                }
                                                            </option>
                                                        )
                                                    )}
                                                </select>
                                            </S.InputGroup>
                                        </S.Row>
                                    </>
                                ) : (
                                    <p>
                                        Ao optar por essa forma de pagamento, é
                                        importante lembrar que a confirmação
                                        pode levar até 3 dias úteis, devido aos
                                        prazos estabelecidos pelas instituições
                                        financeiras. Portanto, a liberação do
                                        código de ativação do jogo adquirido
                                        ocorrerá somente após a aprovação do
                                        pagamento do boleto.
                                    </p>
                                )}
                            </div>
                        </>
                    </Card>
                    <Button
                        type="submit"
                        disabled={isLoading}
                        title="Clique aqui para finalizar a compra"
                    >
                        {isLoading
                            ? 'Finalizando a compra...'
                            : 'Finalizar compra'}
                    </Button>
                </form>
            )}
        </div>
    )
}

export default Checkout
