import styled from 'styled-components'

import { Cores, breakpoints } from '../../styles'

export const HeaderBar = styled.header`
    background-color: ${Cores.cinza};
    padding: 24px;
    border-radius: 16px;
    margin-bottom: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
        color: ${Cores.branca};
        text-decoration: none;
        font-weight: bold;
    }
    div {
        display: flex;
        align-items: center;
    }

    @media (max-width: ${breakpoints.tablet}) {
        display: none;
    }
`
export const Links = styled.ul`
    display: flex;
    margin-left: 40px;
`
export const LinkItem = styled.li`
    margin-right: 16px;
`
export const CartButton = styled.a`
    display: flex;
    cursor: pointer;
    img {
        margin-left: 16px;
    }
`
