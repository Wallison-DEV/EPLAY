import Banner from '../../Components/Banner'
import ProductList from '../../Components/ProductList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

export const Home = () => {
    const { data: onSaleGames, isLoading: saleLoading } = useGetOnSaleQuery()
    const { data: soonGames, isLoading: soonLoading } = useGetSoonQuery()

    return (
        <>
            <Banner />
            <ProductList
                title="Promoções"
                background="gray"
                games={onSaleGames}
                isLoading={saleLoading}
                id="on-sale"
            />
            <ProductList
                title="Em breve"
                background="black"
                games={soonGames}
                isLoading={soonLoading}
                id="coming-soon"
            />
        </>
    )
}
