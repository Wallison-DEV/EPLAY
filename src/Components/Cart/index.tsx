import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

import Button from '../Button'
import Tag from '../Tag'
import {
    Overlay,
    CartContainer,
    Sidebar,
    Quantity,
    Prices,
    CartItem,
} from './styles'
import { formataPreco } from '../ProductList'

const Cart = () => {
    const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

    const dispatch = useDispatch()

    const closeCart = () => {
        dispatch(close())
    }
    const removeGame = (id: number) => {
        dispatch(remove(id))
    }

    const getTotalPrice = () => {
        return items.reduce((acumulador, valorAtual) => {
            return (acumulador += valorAtual.prices.current!)
        }, 0)
    }

    return (
        <CartContainer className={isOpen ? 'is-open' : ''}>
            <Overlay onClick={closeCart} />
            <Sidebar>
                <ul>
                    {items.map((item) => (
                        <CartItem key={item.id}>
                            <img src={item.media.thumbnail} alt={item.name} />
                            <div>
                                <h3>{item.name}</h3>
                                <Tag>{item.details.category}</Tag>
                                <Tag>{item.details.system}</Tag>
                                <span>{formataPreco(item.prices.current)}</span>
                            </div>
                            <button
                                onClick={() => removeGame(item.id)}
                                type="button"
                            />
                        </CartItem>
                    ))}
                </ul>
                <Quantity>{items.length} jogos no carrinho</Quantity>
                <Prices>
                    Total de {formataPreco(getTotalPrice())}{' '}
                    <span>Em até 6x sem juros</span>
                </Prices>
                <Button
                    title="Clique aqui para continuar com a compra"
                    type="link"
                    to="/checkout"
                >
                    Continuar com a compra
                </Button>
            </Sidebar>
        </CartContainer>
    )
}

export default Cart
