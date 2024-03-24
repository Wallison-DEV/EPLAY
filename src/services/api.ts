import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../Pages/Home'

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fake-api-tau.vercel.app/api/eplay',
    }),
    endpoints: (builder) => ({
        getFeaturedGame: builder.query<Game, void>({
            query: () => 'destaque',
        }),
        getOnSale: builder.query<Game[], void>({
            query: () => 'promocoes',
        }),
        getSoon: builder.query<Game[], void>({
            query: () => 'em-breve',
        }),
        getActionGames: builder.query<Game[], void>({
            query: () => 'acao',
        }),
        getRpgGames: builder.query<Game[], void>({
            query: () => 'rpg',
        }),
        getSportsGames: builder.query<Game[], void>({
            query: () => 'esportes',
        }),
        getSimulationGames: builder.query<Game[], void>({
            query: () => 'simulacao',
        }),
        getFightGames: builder.query<Game[], void>({
            query: () => 'luta',
        }),
        getGame: builder.query<Game, string>({
            query: (id) => `jogos/${id}`,
        }),
    }),
})

export const {
    useGetFeaturedGameQuery,
    useGetOnSaleQuery,
    useGetSoonQuery,
    useGetActionGamesQuery,
    useGetFightGamesQuery,
    useGetRpgGamesQuery,
    useGetSimulationGamesQuery,
    useGetSportsGamesQuery,
    useGetGameQuery,
} = api

export default api
