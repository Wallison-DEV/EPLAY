import styled from 'styled-components'
import { Cores } from '../../styles'

export const Items = styled.ul`
    display: flex;
`
export const Action = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.73);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
`
export const Item = styled.li`
    margin-right: 16px;
    position: relative;

    > img {
        object-fit: cover;
        border: 2px solid ${Cores.branca};
        border-radius: 8px;
        width: 150px;
        height: 150px;
    }

    &:hover {
        ${Action} {
            opacity: 1;
            transition: opacity 0.5s ease;
        }
    }
`
export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    display: none;
    align-items: center;
    justify-content: center;

    &.visivel {
        display: flex;
    }

    .overlay {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.73);
    }
`
export const ModalContent = styled.div`
    position: relative;
    z-index: 1;
    max-width: 960px;
    header {
        display: flex;
        justify-content: space-between;
        padding-bottom: 24px;

        h4 {
            font-size: 18px;
            font-weight: bold;
        }
    }

    & > img,
    iframe {
        display: block;
        width: 100%;
    }
    iframe {
        height: 480px;
        width: 100%;
    }
`
