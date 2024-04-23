import styled from 'styled-components'
import { Colors, breakpoints } from '../../styles'

type InputGroupProps = {
    maxWidth?: string
}
type RowProps = {
    marginTop?: string
}
type TabButtonProps = {
    isactive?: boolean
}

export const Row = styled.div<RowProps>`
    display: flex;
    align-items: flex-end;
    column-gap: 24px;
    margin-top: ${(props) => props.marginTop || '0'};

    @media (max-width: ${breakpoints.tablet}) {
        display: block;
    }
`
export const InputGroup = styled.div<InputGroupProps>`
    flex: auto;
    max-width: ${(props) => props.maxWidth || 'auto'};
    input,
    select {
        background-color: ${Colors.white};
        border: 1px solid ${Colors.white};
        height: 32px;
        padding: 0 8px;
        width: 100%;

        &.error {
            border: 1px solid red;
        }
    }
    label {
        font-size: 14px;
        margin-bottom: 8px;
        display: block;
    }
    @media (max-width: ${breakpoints.tablet}) {
        margin-top: 16px;
    }
`

export const TabButton = styled.button<TabButtonProps>`
    border-radius: 8px;
    font-size: 14px;
    font-weight: bold;
    height: 32px;
    border: none;
    margin-right: 16px;
    padding: 0 8px;
    color: ${Colors.white};
    cursor: pointer;

    background-color: ${(props) =>
        props.isactive ? Colors.green : Colors.black};
    img {
        margin-right: 8px;
    }
    @media (max-width: ${breakpoints.tablet}) {
        margin-top: 8px;
        width: 100%;
    }
`
