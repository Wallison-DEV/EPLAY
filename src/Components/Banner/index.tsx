import { Imagem, Precos, Titulo } from './styles'
import Tag from '../Tag'
import BannerImg from '../../assets/images/banner-homem-aranha.png'
import Button from '../Button'

export const Banner = () => {
    return (
        <Imagem style={{ backgroundImage: `url(${BannerImg})` }}>
            <div className="container">
                <Tag size="big">Destaque do dia</Tag>
                <div>
                    <Titulo>
                        Marvel's Spider-Man: Miles Morales PS4 & PS5
                    </Titulo>
                    <Precos>
                        De <span>R$250,00</span>
                        <br />
                        por apenas R$99,90
                    </Precos>
                </div>
                <Button
                    type="link"
                    to="/produto"
                    title="Clique aqui para aproveitar essa oferta"
                >
                    Aproveitar
                </Button>
            </div>
        </Imagem>
    )
}

export default Banner
