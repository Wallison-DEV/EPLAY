import styled from 'styled-components'
import { Cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Banner = styled.div`
    position: relative;
    display: block;
    height: 480px;
    width: 100%;
    padding-top: 16px;

    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    ${TagContainer} {
        margin-right: 8px;
    }
    &::after {
        position: absolute;
        background-color: #000;
        opacity: 0.56;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        content: '';
    }
    .container {
        z-index: 1;
        position: relative;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
    }
`

export const Infos = styled.div`
    padding: 16px;
    background-color: ${Cores.preto};
    max-width: 290px;
    font-weight: bold;

    h2 {
        font-size: 32px;
    }

    p {
        font-size: 18px;
        margin: 16px 0;

        span {
            display: block;
            text-decoration: line-through;
        }
    }
`
