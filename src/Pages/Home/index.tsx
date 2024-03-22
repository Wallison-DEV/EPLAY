import { useEffect, useState } from 'react'

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

export const Home = () => {
    const [promocoes, setPromocoes] = useState<Game[]>([])
    const [emBreve, setEmBreve] = useState<Game[]>([])

    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/eplay/promocoes')
            .then((res) => res.json())
            .then((res) => setPromocoes(res))
    }, [])
    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/eplay/em-breve')
            .then((res) => res.json())
            .then((res) => setEmBreve(res))
    }, [])
    return (
        <>
            <Banner />
            <ProductList
                title="Promoções"
                background="gray"
                games={promocoes}
            />
            <ProductList title="Em breve" background="black" games={emBreve} />
        </>
    )
}
