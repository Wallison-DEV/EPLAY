import Product from '../Product'

import * as S from './styles'

import { parseToBrl } from '../../utils/'
import Loader from '../Loader'

export type ProductListProps = {
    title: string
    background: 'gray' | 'black'
    games?: Game[]
    id?: string
    isLoading: boolean
}

const ProductList = ({
    background,
    title,
    games,
    id,
    isLoading,
}: ProductListProps) => {
    const getGameTags = (game: Game) => {
        const tags = []

        if (game.release_date) {
            tags.push(game.release_date)
        }
        if (game.prices.discount) {
            tags.push(`${game.prices.discount}%`)
        }
        if (game.prices.current) {
            tags.push(parseToBrl(game.prices.current))
        }
        return tags
    }

    if (isLoading) {
        return <Loader />
    }
    return (
        <S.Container id={id} background={background}>
            <div className="container">
                <S.Title>{title}</S.Title>
                <S.List>
                    {games &&
                        games.map((game) => (
                            <li key={game.id}>
                                <Product
                                    id={game.id}
                                    title={game.name}
                                    category={game.details.category}
                                    system={game.details.system}
                                    description={game.description}
                                    infos={getGameTags(game)}
                                    image={game.media.thumbnail}
                                />
                            </li>
                        ))}
                </S.List>
            </div>
        </S.Container>
    )
}

export default ProductList
