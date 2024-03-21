import styled from 'styled-components'

import { Cores } from '../../styles'

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
`
export const Links = styled.ul`
    display: flex;
    margin-left: 40px;
`
export const LinkItem = styled.li`
    margin-right: 16px;
`
export const LinkCart = styled.a`
    display: flex;
    img {
        margin-left: 16px;
    }
`
