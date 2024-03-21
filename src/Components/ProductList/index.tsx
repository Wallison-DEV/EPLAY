import Product from '../Product'
import { Container, List, Title } from './styles'

import Game from '../../models/Game'

export type ProductListProps = {
    title: string
    background: 'gray' | 'black'
    games: Game[]
}
const ProductList = ({ background, title, games }: ProductListProps) => (
    <Container background={background}>
        <div className="container">
            <Title>{title}</Title>
            <List>
                {games.map((game) => (
                    <Product
                        key={game.id}
                        title={game.title}
                        category={game.category}
                        system={game.system}
                        description={game.description}
                        infos={game.infos}
                        image={game.image}
                    />
                ))}
            </List>
        </div>
    </Container>
)

export default ProductList
