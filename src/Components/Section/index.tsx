import { Container, Title } from './styles'

export type SectionProps = {
    title: string
    background: 'black' | 'gray'
    children: JSX.Element
}

const Section = ({ title, background, children }: SectionProps) => (
    <Container background={background}>
        <div className="container">
            <Title>{title}</Title>
            {children}
        </div>
    </Container>
)

export default Section
