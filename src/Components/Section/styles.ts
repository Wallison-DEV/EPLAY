import styled from 'styled-components'

import { SectionProps } from '.'
import { Cores } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<SectionProps, 'title' | 'games'>>`
    padding: 32px 0;
    background-color: ${(props) =>
        props.background == 'black' ? Cores.preto : Cores.cinza};

    ${Card} {
        background-color: ${(props) =>
            props.background == 'black' ? Cores.cinza : Cores.preto};
    }

    p {
        font-size: 14px;
        line-height: 22px;
        max-width: 640px;
    }
`
export const Title = styled.h2`
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 40px;
`
