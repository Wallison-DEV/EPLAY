import ProductList from '../../Components/ProductList'

import {
    useGetActionGamesQuery,
    useGetFightGamesQuery,
    useGetRpgGamesQuery,
    useGetSimulationGamesQuery,
    useGetSportsGamesQuery,
} from '../../services/api'

const Categories = () => {
    const { data: actionGames, isLoading: actionLoading } =
        useGetActionGamesQuery()
    const { data: fightGames, isLoading: fightLoading } =
        useGetFightGamesQuery()
    const { data: rpgGames, isLoading: rpgLoading } = useGetRpgGamesQuery()
    const { data: simulationGames, isLoading: simulationLoading } =
        useGetSimulationGamesQuery()
    const { data: sportGames, isLoading: sportLoading } =
        useGetSportsGamesQuery()

    return (
        <>
            <ProductList
                title="Ação"
                background="black"
                games={actionGames}
                id="action"
                isLoading={actionLoading}
            />
            <ProductList
                title="Esportes"
                background="gray"
                games={sportGames}
                id="sports"
                isLoading={sportLoading}
            />
            <ProductList
                title="Simulação"
                background="black"
                games={simulationGames}
                id="simulation"
                isLoading={simulationLoading}
            />
            <ProductList
                title="Luta"
                background="gray"
                games={fightGames}
                id="fight"
                isLoading={fightLoading}
            />
            <ProductList
                title="RPG"
                background="black"
                games={rpgGames}
                id="rpg"
                isLoading={rpgLoading}
            />
        </>
    )
}
export default Categories
