import styled from 'styled-components'

import { Colors, breakpoints } from '../../styles'

export const Links = styled.ul`
    display: flex;
    margin-left: 40px;

    @media (max-width: ${breakpoints.tablet}) {
        margin-left: 0;
        display: block;
    }
`
export const HeaderBar = styled.header`
    background-color: ${Colors.gray};
    padding: 24px;
    border-radius: 16px;
    margin-bottom: 80px;

    a,
    span {
        color: ${Colors.white};
        text-decoration: none;
        font-weight: bold;
    }
    h1 {
        line-height: 0;
    }
`
export const HeaderRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    > div {
        display: flex;
        align-items: center;

        @media (max-width: ${breakpoints.tablet}) {
            flex: 1;
            justify-content: space-between;

            ${Links} {
                display: none;
            }
        }
    }
`
export const NavMobile = styled.div`
    display: none;
    @media (max-width: ${breakpoints.tablet}) {
        &.is-open {
            display: block;
        }
    }
`
export const LinkItem = styled.li`
    margin-right: 16px;

    @media (max-width: ${breakpoints.tablet}) {
        margin-left: 0;
        a {
            display: block;
            padding: 16px 0;
            text-align: center;
        }
    }
`
export const CartButton = styled.span`
    display: flex;
    cursor: pointer;
    img {
        margin-left: 16px;
    }
    @media (max-width: ${breakpoints.tablet}) {
        span {
            display: none;
        }
    }
`
export const Hamburguer = styled.div`
    width: 32px;
    display: none;
    span {
        height: 2px;
        width: 100%;
        display: block;
        background-color: ${Colors.white};
        margin-bottom: 4px;
    }
    @media (max-width: ${breakpoints.tablet}) {
        display: block;
    }
`
