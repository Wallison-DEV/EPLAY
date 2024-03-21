import styled from 'styled-components'

import { ProductListProps } from '.'
import { Cores } from '../../styles'
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
    column-gap: 24px;
    margin-top: 40px;
`
export const Title = styled.h2`
    font-weight: bold;
    font-size: 18px;
`
