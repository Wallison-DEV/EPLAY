import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

import { getTotalPrice, parseToBrl } from '../../utils/'

import Button from '../Button'
import Tag from '../Tag'

import * as S from './styles'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const closeCart = () => {
        dispatch(close())
    }
    const removeGame = (id: number) => {
        dispatch(remove(id))
    }

    const goToCheckout = () => {
        navigate('/checkout')
        closeCart()
    }

    return (
        <S.CartContainer className={isOpen ? 'is-open' : ''}>
            <S.Overlay onClick={closeCart} />
            <S.Sidebar>
                {items.length > 0 ? (
                    <>
                        <ul>
                            {items.map((item) => (
                                <S.CartItem key={item.id}>
                                    <img
                                        src={item.media.thumbnail}
                                        alt={item.name}
                                    />
                                    <div>
                                        <h3>{item.name}</h3>
                                        <Tag>{item.details.category}</Tag>
                                        <Tag>{item.details.system}</Tag>
                                        <span>
                                            {parseToBrl(item.prices.current)}
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => removeGame(item.id)}
                                        type="button"
                                    />
                                </S.CartItem>
                            ))}
                        </ul>
                        <S.Quantity>
                            {items.length} jogos no carrinho
                        </S.Quantity>
                        <S.Prices>
                            Total de {parseToBrl(getTotalPrice(items))}{' '}
                            <span>Em até 6x sem juros</span>
                        </S.Prices>
                        <Button
                            title="Clique aqui para continuar com a compra"
                            type="button"
                            onClick={() => goToCheckout()}
                        >
                            Continuar com a compra
                        </Button>
                    </>
                ) : (
                    <div className="empty-text">
                        <p> O carrinho está vazio</p>
                        <p>
                            Adicione pelo menos um produto para continuar com a
                            compra
                        </p>
                    </div>
                )}
            </S.Sidebar>
        </S.CartContainer>
    )
}

export default Cart
