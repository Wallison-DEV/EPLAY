import { Container, FooterSection, Link, Links, SectionTitle } from './styles'

const Footer = () => (
    <Container>
        <div className="container">
            <FooterSection>
                <SectionTitle>Categorias</SectionTitle>
                <Links>
                    <li>
                        <Link>RPG</Link>
                    </li>
                    <li>
                        <Link>Aventura</Link>
                    </li>
                    <li>
                        <Link>Simulação</Link>
                    </li>
                    <li>
                        <Link>Esportes</Link>
                    </li>
                    <li>
                        <Link>Estratégia</Link>
                    </li>
                    <li>
                        <Link>FPS</Link>
                    </li>
                </Links>
            </FooterSection>
            <FooterSection>
                <SectionTitle>Acesso rápido</SectionTitle>
                <Links>
                    <li>
                        <Link>Novidades</Link>
                    </li>
                    <li>
                        <Link>Promoções</Link>
                    </li>
                    <li>
                        <Link>Em Breve</Link>
                    </li>
                </Links>
            </FooterSection>
            <p>
                {new Date().getFullYear()} - &copy; E-PLAY Todos os direitos
                reservados
            </p>
        </div>
    </Container>
)

export default Footer
