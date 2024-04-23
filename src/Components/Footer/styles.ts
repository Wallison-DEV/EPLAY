import styled from 'styled-components'
import { Colors } from '../../styles'
import { HashLink } from 'react-router-hash-link'

export const Container = styled.footer`
    background-color: ${Colors.gray};
    padding: 32px 0;
    font-size: 14px;
    margin-top: 40px;
`
export const SectionTitle = styled.h4`
    color: ${Colors.white};
    font-weight: bold;
    font-size: 16px;
`
export const Links = styled.ul`
    display: flex;
    margin-top: 16px;
`
export const Link = styled(HashLink)`
    color: ${Colors.lightGray};
    text-decoration: none;
    margin-right: 8px;
`

export const FooterSection = styled.div`
    margin-bottom: 64px;
`
