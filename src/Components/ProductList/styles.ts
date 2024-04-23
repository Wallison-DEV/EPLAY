import styled from 'styled-components'

import { ProductListProps } from '.'
import { Colors, breakpoints } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<
    Omit<ProductListProps, 'title' | 'games' | 'isLoading'>
>`
    padding: 32px 0;
    background-color: ${(props) =>
        props.background == 'black' ? Colors.black : Colors.gray};

    ${Card} {
        background-color: ${(props) =>
            props.background == 'black' ? Colors.gray : Colors.black};
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
    @media (max-width: 580px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
export const Title = styled.h2`
    font-weight: 700;
    font-size: 16px;
`
