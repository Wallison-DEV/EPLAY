import { useParams } from 'react-router-dom'

import Hero from '../../Components/Hero'
import Section from '../../Components/Section'
import Gallery from '../../Components/Gallery'

import { useEffect, useState } from 'react'
import { Game } from '../Home'

const Product = () => {
    const { id } = useParams()

    const [game, setGame] = useState<Game>()

    useEffect(() => {
        fetch(`https://fake-api-tau.vercel.app/api/eplay/jogos/${id}`)
            .then((res) => res.json())
            .then((res) => setGame(res))
    }, [id])

    if (!game) {
        return <h3>Carregando...</h3>
    }

    return (
        <>
            <Hero game={game} />
            <Section title="Sobre o jogo" background="black">
                <p>{game.description}</p>
            </Section>
            <Section title="Mais detalhes" background="gray">
                <p>
                    <b>Plataforma:</b> {game.details.system} <br />
                    <b>Desenvolvedor:</b> {game.details.developer}
                    <br />
                    <b>Editora:</b> {game.details.publisher} <br />
                    <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas,
                    incluindo {game.details.languages.join(', ')}.
                </p>
            </Section>
            <Gallery
                name={game.name}
                defaultCover={game.media.cover}
                items={game.media.gallery}
            />
        </>
    )
}
export default Product
