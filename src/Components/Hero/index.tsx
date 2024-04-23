import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'

import * as S from './styles'
import Tag from '../../Components/Tag'
import Button from '../Button'
import { parseToBrl } from '../../utils/'

type HeroProps = {
    game: Game
}

const Hero = ({ game }: HeroProps) => {
    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(add(game))
        dispatch(open())
    }

    return (
        <S.Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
            <div className="container">
                <div>
                    <Tag>{game.details.category}</Tag>
                    <Tag>{game.details.system}</Tag>
                </div>
                <S.Infos>
                    <h2>{game.name}</h2>
                    <p>
                        {game.prices.discount && (
                            <span>{parseToBrl(game.prices.old)}</span>
                        )}
                    </p>
                    {game.prices.current ? (
                        <>
                            <span>{parseToBrl(game.prices.current)}</span>
                            <Button
                                onClick={addToCart}
                                variant="primary"
                                type="button"
                                title="Clique para adiciona-lo ao carrinho"
                            >
                                Adicionar ao carrinho
                            </Button>
                        </>
                    ) : (
                        <></>
                    )}
                </S.Infos>
            </div>
        </S.Banner>
    )
}
export default Hero
