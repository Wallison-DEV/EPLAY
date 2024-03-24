import styled from 'styled-components'
import { Cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'

export const Card = styled(Link)`
    position: relative;
    background-color: ${Cores.cinza};
    border-radius: 8px;
    padding: 8px;
    text-decoration: none;
    color: ${Cores.branca};
    display: block;
    width: 238px;
    height: 420px;

    img {
        display: block;
        width: 100%;
        height: 250px;
        width: 222px;
        object-fit: cover;
    }

    ${TagContainer} {
        margin-right: 8px;
    }
`

export const Titulo = styled.h3`
    font-weight: bold;
    font-size: 16px;
    display: block;
    margin: 16px 0 8px;
`

export const Descricao = styled.p`
    font-size: 14px;
    line-height: 22px;
    display: block;
    margin-top: 16px;
`
export const Infos = styled.div`
    position: absolute;
    right: 16px;
    top: 16px;
`
