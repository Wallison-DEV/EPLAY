import styled from 'styled-components'
import { Cores } from '../../styles'

export const Container = styled.footer`
    background-color: ${Cores.cinza};
    padding: 32px 0;
    font-size: 14px;
`
export const SectionTitle = styled.h4`
    color: ${Cores.branca};
    font-weight: bold;
    font-size: 16px;
`
export const Links = styled.ul`
    display: flex;
    margin-top: 16px;
`
export const Link = styled.a`
    color: ${Cores.cinzaClaro};
    text-decoration: none;
    margin-right: 8px;
`

export const FooterSection = styled.div`
    margin-bottom: 64px;
`
