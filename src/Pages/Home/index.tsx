import Banner from '../../Components/Banner'
import ProductList from '../../Components/ProductList'

export interface GalleryItemProps {
    type: 'image' | 'video'
    url: string
}

export type Game = {
    id: number
    name: string
    description: string
    release_date?: string
    prices: {
        discount?: number
        old?: number
        current: number
    }
    details: {
        category: string
        system: string
        developer: string
        publisher: string
        languages: string[]
    }
    media: {
        thumbnail: string
        cover: string
        gallery: GalleryItemProps[]
    }
}

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

export const Home = () => {
    const { data: onSaleGames } = useGetOnSaleQuery()
    const { data: soonGames } = useGetSoonQuery()

    if (onSaleGames && soonGames) {
        return (
            <>
                <Banner />
                <ProductList
                    title="Promoções"
                    background="gray"
                    games={onSaleGames}
                    id="on-sale"
                />
                <ProductList
                    title="Em breve"
                    background="black"
                    games={soonGames}
                    id="coming-soon"
                />
            </>
        )
    }

    return <h4>Carregando...</h4>
}
