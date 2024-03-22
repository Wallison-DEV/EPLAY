import { useEffect, useState } from 'react'
import ProductList from '../../Components/ProductList'

import { Game } from '../Home'

const Categories = () => {
    const [gamesAcao, setGamesAcao] = useState<Game[]>([])
    const [gamesEsportes, setGamesEsportes] = useState<Game[]>([])
    const [gamesSimulacao, setGamesSimulacao] = useState<Game[]>([])
    const [gamesLuta, setGamesLuta] = useState<Game[]>([])
    const [gamesRPG, setGamesRPG] = useState<Game[]>([])

    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
            .then((res) => res.json())
            .then((res) => setGamesAcao(res))

        fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
            .then((res) => res.json())
            .then((res) => setGamesEsportes(res))

        fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
            .then((res) => res.json())
            .then((res) => setGamesSimulacao(res))

        fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
            .then((res) => res.json())
            .then((res) => setGamesLuta(res))

        fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
            .then((res) => res.json())
            .then((res) => setGamesRPG(res))
    }, [])

    return (
        <>
            <ProductList title="Ação" background="black" games={gamesAcao} />
            <ProductList
                title="Esportes"
                background="gray"
                games={gamesEsportes}
            />
            <ProductList
                title="Simulação"
                background="black"
                games={gamesSimulacao}
            />
            <ProductList title="Luta" background="gray" games={gamesLuta} />
            <ProductList title="RPG" background="black" games={gamesRPG} />
        </>
    )
}
export default Categories
