import * as S from './styles'

import Tag from '../Tag'
import Button from '../Button'

import Loader from '../../Components/Loader'

import { parseToBrl } from '../../utils/'

import { useGetFeaturedGameQuery } from '../../services/api'

export const Banner = () => {
    const { data: game } = useGetFeaturedGameQuery()

    if (!game) {
        return <Loader />
    }

    return (
        <S.Image style={{ backgroundImage: `url(${game?.media.cover})` }}>
            <div className="container">
                <Tag size="big">Destaque do dia</Tag>
                <div>
                    <S.Title>{game?.name}</S.Title>
                    <S.Prices>
                        De <span>{parseToBrl(game.prices.old)}</span>
                        <br />
                        por apenas {parseToBrl(game.prices.current)}
                    </S.Prices>
                </div>
                <Button
                    type="link"
                    to={`/product/${game.id}`}
                    title="Clique aqui para aproveitar essa oferta"
                >
                    Aproveitar
                </Button>
            </div>
        </S.Image>
    )
}

export default Banner
