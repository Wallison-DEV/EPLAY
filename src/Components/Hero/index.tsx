import { Banner, Infos } from './styles'
import Tag from '../../Components/Tag'
import Button from '../Button'
import { Game } from '../../Pages/Home'
import { formataPreco } from '../ProductList'

type HeroProps = {
    game: Game
}

const Hero = ({ game }: HeroProps) => {
    return (
        <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
            <div className="container">
                <div>
                    <Tag>{game.details.category}</Tag>
                    <Tag>{game.details.system}</Tag>
                </div>
                <Infos>
                    <h2>{game.name}</h2>
                    <p>
                        {game.prices.discount && (
                            <span>{formataPreco(game.prices.old)}</span>
                        )}
                    </p>
                    {game.prices.current ? (
                        <>
                            {formataPreco(game.prices.current)}

                            <Button
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
                </Infos>
            </div>
        </Banner>
    )
}
export default Hero
