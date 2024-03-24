import styled from 'styled-components'

import { ProductListProps } from '.'
import { Cores, breakpoints } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<
    Omit<ProductListProps, 'title' | 'games'>
>`
    padding: 32px 0;
    background-color: ${(props) =>
        props.background == 'black' ? Cores.preto : Cores.cinza};

    ${Card} {
        background-color: ${(props) =>
            props.background == 'black' ? Cores.cinza : Cores.preto};
    }
`
export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 24px;
    margin-top: 40px;

    @media (max-width: ${breakpoints.desktop}) {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: ${breakpoints.tablet}) {
        grid-template-columns: 1fr;
    }
`
export const Title = styled.h2`
    font-weight: 700;
    font-size: 16px;
`
