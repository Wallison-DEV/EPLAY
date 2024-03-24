import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Button from '../../Components/Button'
import Card from '../../Components/Card'
import { Row, InputGroup, TabButton } from './styles'

import boletoImg from '../../assets/icons/boleto.png'
import creditoPng from '../../assets/icons/credito.png'

const Checkout = () => {
    const [payWithCard, setPayWithCard] = useState(false)

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
                .min(14, 'O campo precisa ter 14 caracteres')
                .max(14, 'O campo precisa ter 14 caracteres')
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

            cardOwner: Yup.string().when((values, schema) =>
                payWithCard ? schema.required('O campo é obrigatório') : schema
            ),
            cpfCardOwner: Yup.string().when((values, schema) =>
                payWithCard ? schema.required('O campo é obrigatório') : schema
            ),
            cardDisplayName: Yup.string().when((values, schema) =>
                payWithCard ? schema.required('O campo é obrigatório') : schema
            ),
            cardNumber: Yup.string().when((values, schema) =>
                payWithCard ? schema.required('O campo é obrigatório') : schema
            ),
            expiresYear: Yup.string().when((values, schema) =>
                payWithCard ? schema.required('O campo é obrigatório') : schema
            ),
            expiresMonth: Yup.string().when((values, schema) =>
                payWithCard ? schema.required('O campo é obrigatório') : schema
            ),
            cardCode: Yup.string().when((values, schema) =>
                payWithCard ? schema.required('O campo é obrigatório') : schema
            ),
            installments: Yup.string().when((values, schema) =>
                payWithCard ? schema.required('O campo é obrigatório') : schema
            ),
        }),
        onSubmit: (values) => {
            console.log(values)
        },
    })

    const getErrorMessage = (fieldName: string, message?: string) => {
        const isTouched = fieldName in form.touched
        const isValid = fieldName in form.errors

        if (isTouched && isValid) return message
        return ''
    }

    return (
        <form onClick={form.handleSubmit} className="container">
            <Card title="Dados de cobrança">
                <>
                    <Row>
                        <InputGroup>
                            <label htmlFor="name">Nome completo</label>
                            <input
                                id="name"
                                type="text"
                                name="fullName"
                                value={form.values.fullName}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                            />
                            <small>
                                {getErrorMessage(
                                    'fullName',
                                    form.errors.fullName
                                )}
                            </small>
                        </InputGroup>
                        <InputGroup>
                            <label htmlFor="email">E-mail</label>
                            <input
                                id="email"
                                type="text"
                                name="email"
                                onChange={form.handleChange}
                                value={form.values.email}
                                onBlur={form.handleBlur}
                            />
                            <small>
                                {getErrorMessage('email', form.errors.email)}
                            </small>
                        </InputGroup>
                        <InputGroup>
                            <label htmlFor="cpf">CPF</label>
                            <input
                                id="cpf"
                                type="number"
                                name="cpf"
                                onChange={form.handleChange}
                                value={form.values.cpf}
                                onBlur={form.handleBlur}
                            />
                            <small>
                                {getErrorMessage('cpf', form.errors.cpf)}
                            </small>
                        </InputGroup>
                    </Row>
                    <h3 className="margin-top">
                        Dados de entrega - conteúdo digital
                    </h3>
                    <Row>
                        <InputGroup>
                            <label htmlFor="deliveryEmail">E-mail</label>
                            <input
                                id="deliveryEmail"
                                type="text"
                                name="deliveryEmail"
                                onChange={form.handleChange}
                                value={form.values.deliveryEmail}
                                onBlur={form.handleBlur}
                            />
                            <small>
                                {getErrorMessage(
                                    'deliveryEmail',
                                    form.errors.deliveryEmail
                                )}
                            </small>
                        </InputGroup>
                        <InputGroup>
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
                            />
                            <small>
                                {getErrorMessage(
                                    'confirmDeliveryEmail',
                                    form.errors.confirmDeliveryEmail
                                )}
                            </small>
                        </InputGroup>
                    </Row>
                </>
            </Card>
            <Card title="Pagamento">
                <>
                    <TabButton
                        isActive={!payWithCard}
                        onClick={() => setPayWithCard(false)}
                    >
                        <img src={boletoImg} alt="Boleto" />
                        Boleto bancário
                    </TabButton>
                    <TabButton
                        isActive={payWithCard}
                        onClick={() => setPayWithCard(true)}
                    >
                        <img src={creditoPng} alt="Cartão de crédito" />
                        Cartão de crédito
                    </TabButton>
                    <div className="margin-top">
                        {payWithCard ? (
                            <>
                                <Row>
                                    <InputGroup>
                                        <label htmlFor="cardOwner">
                                            Nome do titular do cartão
                                        </label>
                                        <input
                                            id="cardOwner"
                                            type="text"
                                            name="cardOwner"
                                            onChange={form.handleChange}
                                            value={form.values.cardOwner}
                                            onBlur={form.handleBlur}
                                        />
                                        <small>
                                            {getErrorMessage(
                                                'cardOwner',
                                                form.errors.cardOwner
                                            )}
                                        </small>
                                    </InputGroup>
                                    <InputGroup>
                                        <label htmlFor="cpfCardOwner">
                                            Cpf do titular do cartão
                                        </label>
                                        <input
                                            id="cpfCardOwner"
                                            type="number"
                                            name="cpfCardOwner"
                                            onChange={form.handleChange}
                                            value={form.values.cpfCardOwner}
                                            onBlur={form.handleBlur}
                                        />
                                        <small>
                                            {getErrorMessage(
                                                'cpfCardOwner',
                                                form.errors.cpfCardOwner
                                            )}
                                        </small>
                                    </InputGroup>
                                </Row>
                                <Row marginTop="24px">
                                    <InputGroup>
                                        <label htmlFor="cardDisplayName">
                                            Nome no cartão
                                        </label>
                                        <input
                                            id="cardDisplayName"
                                            type="text"
                                            name="cardDisplayName"
                                            onChange={form.handleChange}
                                            value={form.values.cardDisplayName}
                                            onBlur={form.handleBlur}
                                        />
                                        <small>
                                            {getErrorMessage(
                                                'cardDisplayName',
                                                form.errors.cardDisplayName
                                            )}
                                        </small>
                                    </InputGroup>
                                    <InputGroup>
                                        <label htmlFor="cardNumber">
                                            Número no cartão
                                        </label>
                                        <input
                                            id="cardNumber"
                                            type="number"
                                            name="cardNumber"
                                            onChange={form.handleChange}
                                            value={form.values.cardNumber}
                                            onBlur={form.handleBlur}
                                        />
                                        <small>
                                            {getErrorMessage(
                                                'cardNumber',
                                                form.errors.cardNumber
                                            )}
                                        </small>
                                    </InputGroup>
                                    <InputGroup maxWidth="123px">
                                        <label htmlFor="expiresMonth">
                                            Mês do vencimento
                                        </label>
                                        <input
                                            id="expiresMonth"
                                            type="text"
                                            name="expiresMonth"
                                            onChange={form.handleChange}
                                            value={form.values.expiresMonth}
                                            onBlur={form.handleBlur}
                                        />
                                        <small>
                                            {getErrorMessage(
                                                'expiresMonth',
                                                form.errors.expiresMonth
                                            )}
                                        </small>
                                    </InputGroup>
                                    <InputGroup maxWidth="123px">
                                        <label htmlFor="expiresYear">
                                            Ano de vencimento
                                        </label>
                                        <input
                                            id="expiresYear"
                                            type="number"
                                            name="expiresYear"
                                            onChange={form.handleChange}
                                            value={form.values.expiresYear}
                                            onBlur={form.handleBlur}
                                        />
                                        <small>
                                            {getErrorMessage(
                                                'expiresYear',
                                                form.errors.expiresYear
                                            )}
                                        </small>
                                    </InputGroup>
                                    <InputGroup maxWidth="48px">
                                        <label htmlFor="cardCode">Cvv</label>
                                        <input
                                            id="cardCode"
                                            type="text"
                                            name="cardCode"
                                            onChange={form.handleChange}
                                            value={form.values.cardCode}
                                            onBlur={form.handleBlur}
                                        />
                                        <small>
                                            {getErrorMessage(
                                                'cardCode',
                                                form.errors.cardCode
                                            )}
                                        </small>
                                    </InputGroup>
                                </Row>
                                <Row marginTop="24px">
                                    <InputGroup maxWidth="150px">
                                        <label htmlFor="installments">
                                            Parcelamento
                                        </label>
                                        <select
                                            id="installments"
                                            name="installments"
                                            onChange={form.handleChange}
                                            value={form.values.installments}
                                            onBlur={form.handleBlur}
                                        >
                                            <small>
                                                {getErrorMessage(
                                                    'installments',
                                                    form.errors.installments
                                                )}
                                            </small>
                                            <option>1x de R$200,00</option>
                                            <option>2x de R$100,00</option>
                                            <option>4x de R$50,00</option>
                                        </select>
                                    </InputGroup>
                                </Row>
                            </>
                        ) : (
                            <p>
                                Ao optar por essa forma de pagamento, é
                                importante lembrar que a confirmação pode levar
                                até 3 dias úteis, devido aos prazos
                                estabelecidos pelas instituições financeiras.
                                Portanto, a liberação do código de ativação do
                                jogo adquirido ocorrerá somente após a aprovação
                                do pagamento do boleto.
                            </p>
                        )}
                    </div>
                </>
            </Card>
            <Button type="button" title="Clique aqui para finalizar a compra">
                Finalizar compra
            </Button>
        </form>
    )
}

export default Checkout
