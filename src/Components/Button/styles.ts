import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Colors } from '../../styles'
import { ButtonProps } from '.'

export const ButtonContainer = styled.button<ButtonProps>`
    border: 2px solid
        ${(props) => (props.variant == 'primary' ? Colors.green : Colors.white)};
    color: ${Colors.white};
    background-color: ${(props) =>
        props.variant == 'primary' ? Colors.green : 'transparent'};
    font-size: 16px;
    font-weight: bold;
    padding: 8px 16px;
    margin-top: 16px;
    border-radius: 8px;
    cursor: pointer;
`

export const ButtonLink = styled(Link)`
    border: 2px solid ${Colors.white};
    color: ${Colors.white};
    background-color: transparent;
    font-size: 16px;
    font-weight: bold;
    padding: 8px 16px;
    text-decoration: none;
    border-radius: 8px;
`
