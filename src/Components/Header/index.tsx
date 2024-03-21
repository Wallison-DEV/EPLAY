import { Link } from 'react-router-dom'

import { HeaderBar, LinkItem, Links, LinkCart } from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'
const Header = () => (
    <HeaderBar>
        <div>
            <Link to="/">
                <img src={logo} alt="Logo" />
            </Link>
            <nav>
                <Links>
                    <LinkItem>
                        <Link to="/categorias">Categorias</Link>
                    </LinkItem>
                    <LinkItem>
                        <a href="">Novidades</a>
                    </LinkItem>
                    <LinkItem>
                        <a href="">Promoções</a>
                    </LinkItem>
                </Links>
            </nav>
        </div>
        <LinkCart href="">
            0 - Produto(s)
            <img src={carrinho} alt="Carrinho" />
        </LinkCart>
    </HeaderBar>
)

export default Header
