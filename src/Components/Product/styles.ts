import styled from 'styled-components'
import { Colors } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'

export const Card = styled(Link)`
    position: relative;
    background-color: ${Colors.gray};
    border-radius: 8px;
    padding: 8px;
    text-decoration: none;
    color: ${Colors.white};
    display: block;
    width: 238px;
    height: 100%;

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

export const Title = styled.h3`
    font-weight: bold;
    font-size: 16px;
    display: block;
    margin: 16px 0 8px;
`

export const Description = styled.p`
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
