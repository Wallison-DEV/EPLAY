import { Container } from './styles'

type CardProps = {
    children: JSX.Element
    title: string
}

const Card = ({ children, title }: CardProps) => {
    return (
        <Container>
            <h2>{title}</h2>
            {children}
        </Container>
    )
}

export default Card
