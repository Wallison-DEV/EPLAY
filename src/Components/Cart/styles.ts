import styled from 'styled-components'
import { Colors } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer, ButtonLink } from '../Button/styles'

import closeIcon from '../../assets/icons/close.png'

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.7;
`
export const CartContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    justify-content: flex-end;
    z-index: 1;

    &.is-open {
        display: flex;
    }
`

export const Sidebar = styled.aside`
    max-width: 360px;
    width: 100%;
    background-color: ${Colors.gray};
    z-index: 1;
    padding: 40px 16px 0;

    ${ButtonContainer} {
        max-width: 100%;
        width: 100%;
        margin: 0;
    }
    ${ButtonLink} {
        margin-top: 0;
        border: none;
        color: ${Colors.white};
        background-color: ${Colors.green};
        font-size: 16px;
        font-weight: bold;
        padding: 8px 16px;
        margin-top: 16px;
        border-radius: 8px;
    }

    .empty-text {
        font-size: 14px;
        line-height: 22px;
        color: ${Colors.white};
        text-align: center;
    }
`
export const Prices = styled.p`
    font-weight: bold;
    font-size: 14px;
    color: ${Colors.white};
    margin-bottom: 24px;

    span {
        display: block;
        font-size: 12px;
        color: ${Colors.lightGray};
    }
`
export const Quantity = styled.p`
    font-weight: bold;
    font-size: 16px;
    color: ${Colors.white};
    margin: 32px 0 16px;
`

export const CartItem = styled.li`
    display: flex;
    border-bottom: 1px solid ${Colors.lightGray};
    padding: 8px 0;
    position: relative;

    img {
        width: 80px;
        height: 80px;
        object-fit: cover;
        margin-right: 24px;
    }

    h3 {
        color: ${Colors.white}
        font-size: 16px;
        font-weght: bold;
    }
    span {
        display: block;
        color: ${Colors.white}
        font-size: 14px;
        font-weght: bold;
    }
    ${TagContainer} {
        margin: 8px 8px 16px 0;
    }

    button {
        background-image: url(${closeIcon});
        width: 16px;
        height: 16px;
        border: none;
        background-color: transparent;
        position: absolute;
        top: 8px;
        right: 0;
    }
`
