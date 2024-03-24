import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Cores } from '../../styles'
import { ButtonProps } from '.'

export const ButtonContainer = styled.button<ButtonProps>`
    border: 2px solid
        ${(props) => (props.variant == 'primary' ? Cores.verde : Cores.branca)};
    color: ${Cores.branca};
    background-color: ${(props) =>
        props.variant == 'primary' ? Cores.verde : 'transparent'};
    font-size: 16px;
    font-weight: bold;
    padding: 8px 16px;
    margin-top: 16px;
    border-radius: 8px;
`

export const ButtonLink = styled(Link)`
    border: 2px solid ${Cores.branca};
    color: ${Cores.branca};
    background-color: transparent;
    font-size: 16px;
    font-weight: bold;
    padding: 8px 16px;
    text-decoration: none;
    border-radius: 8px;
`
