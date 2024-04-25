import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import * as S from './styles'

import logo from '../../assets/images/logo.svg'
import cartIcon from '../../assets/images/carrinho.svg'


const Header = () => {
    const dispatch = useDispatch()
    const { items } = useSelector((state: RootReducer) => state.cart)
    const [isMenuOpen, setMenuOpen] = useState(false)
    const openCart = () => {
        dispatch(open())
    }

    return (
        <S.HeaderBar>
            <S.HeaderRow>
                <div>
                    <S.Hamburguer onClick={() => setMenuOpen(!isMenuOpen)}>
                        <span />
                        <span />
                        <span />
                    </S.Hamburguer>
                    <Link to="/">
                        <h1>
                            <img src={logo} alt="EPLAY" />
                        </h1>
                    </Link>
                    <nav>
                        <S.Links>
                            <S.LinkItem>
                                <Link
                                    title="Clique aqui para acessar a página de categorias"
                                    to="/categorias"
                                >
                                    Categorias
                                </Link>
                            </S.LinkItem>
                            <S.LinkItem>
                                <HashLink
                                    title="Clique aqui para acessar a sessão de em breve"
                                    to="/#coming-soon"
                                >
                                    Em Breve
                                </HashLink>
                            </S.LinkItem>
                            <S.LinkItem>
                                <HashLink
                                    title="Clique aqui para acessar a sessão de promoções"
                                    to="/#on-sale"
                                >
                                    Promoções
                                </HashLink>
                            </S.LinkItem>
                        </S.Links>
                    </nav>
                </div>
                <S.CartButton role="button" onClick={openCart}>
                    {items.length}
                    <span> - Produto(s)</span>
                    <img src={cartIcon} alt="Carrinho" />
                </S.CartButton>
            </S.HeaderRow>
            <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
                <S.Links>
                    <S.LinkItem>
                        <Link
                            onClick={() => setMenuOpen(false)}
                            title="Clique aqui para acessar a página de categorias"
                            to="/categorias"
                        >
                            Categorias
                        </Link>
                    </S.LinkItem>
                    <S.LinkItem>
                        <HashLink
                            onClick={() => setMenuOpen(false)}
                            title="Clique aqui para acessar a sessão de em breve"
                            to="/#coming-soon"
                        >
                            Em Breve
                        </HashLink>
                    </S.LinkItem>
                    <S.LinkItem>
                        <HashLink
                            onClick={() => setMenuOpen(false)}
                            title="Clique aqui para acessar a sessão de promoções"
                            to="/#on-sale"
                        >
                            Promoções
                        </HashLink>
                    </S.LinkItem>
                </S.Links>
            </S.NavMobile>
        </S.HeaderBar>
    )
}

export default Header
