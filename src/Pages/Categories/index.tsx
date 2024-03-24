import ProductList from '../../Components/ProductList'

import {
    useGetActionGamesQuery,
    useGetFightGamesQuery,
    useGetRpgGamesQuery,
    useGetSimulationGamesQuery,
    useGetSportsGamesQuery,
} from '../../services/api'

const Categories = () => {
    const { data: actionGames } = useGetActionGamesQuery()
    const { data: fightGames } = useGetFightGamesQuery()
    const { data: rpgGames } = useGetRpgGamesQuery()
    const { data: simulationGames } = useGetSimulationGamesQuery()
    const { data: sportGames } = useGetSportsGamesQuery()

    if (
        actionGames &&
        fightGames &&
        rpgGames &&
        simulationGames &&
        sportGames
    ) {
        return (
            <>
                <ProductList
                    title="Ação"
                    background="black"
                    games={actionGames}
                    id="action"
                />
                <ProductList
                    title="Esportes"
                    background="gray"
                    games={sportGames}
                    id="sports"
                />
                <ProductList
                    title="Simulação"
                    background="black"
                    games={simulationGames}
                    id="simulation"
                />
                <ProductList
                    title="Luta"
                    background="gray"
                    games={fightGames}
                    id="fight"
                />
                <ProductList
                    title="RPG"
                    background="black"
                    games={rpgGames}
                    id="rpg"
                />
            </>
        )
    }
    return <h4>Carregando...</h4>
}
export default Categories
