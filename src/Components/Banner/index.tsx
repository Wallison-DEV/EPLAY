import { Imagem, Precos, Titulo } from './styles'
import Tag from '../Tag'
import Button from '../Button'
import { formataPreco } from '../ProductList'

import { useGetFeaturedGameQuery } from '../../services/api'

export const Banner = () => {
    const { data: game } = useGetFeaturedGameQuery()

    if (!game) {
        return <h3>Carregando...</h3>
    }

    return (
        <Imagem style={{ backgroundImage: `url(${game?.media.cover})` }}>
            <div className="container">
                <Tag size="big">Destaque do dia</Tag>
                <div>
                    <Titulo>{game?.name}</Titulo>
                    <Precos>
                        De <span>{formataPreco(game.prices.old)}</span>
                        <br />
                        por apenas {formataPreco(game.prices.current)}
                    </Precos>
                </div>
                <Button
                    type="link"
                    to={`/product/${game.id}`}
                    title="Clique aqui para aproveitar essa oferta"
                >
                    Aproveitar
                </Button>
            </div>
        </Imagem>
    )
}

export default Banner
