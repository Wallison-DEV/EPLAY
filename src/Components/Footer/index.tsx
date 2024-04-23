import * as S from './styles'

const Footer = () => (
    <S.Container>
        <div className="container">
            <S.FooterSection>
                <S.SectionTitle>Categorias</S.SectionTitle>
                <S.Links>
                    <li>
                        <S.Link
                            title="Clique aqui para acessar jogos de RPG"
                            to="/categorias#rpg"
                        >
                            RPG
                        </S.Link>
                    </li>
                    <li>
                        <S.Link
                            title="Clique aqui para acessar jogos de esportes"
                            to="/categorias#sports"
                        >
                            Esportes
                        </S.Link>
                    </li>
                    <li>
                        <S.Link
                            title="Clique aqui para acessar jogos de ação"
                            to="/categorias#action"
                        >
                            Ação
                        </S.Link>
                    </li>
                    <li>
                        <S.Link
                            title="Clique aqui para acessar jogos de simulação"
                            to="/categorias#simulation"
                        >
                            Simulação
                        </S.Link>
                    </li>
                    <li>
                        <S.Link
                            title="Clique aqui para acessar jogos de luta"
                            to="/categorias#fight"
                        >
                            Luta
                        </S.Link>
                    </li>
                </S.Links>
            </S.FooterSection>
            <S.FooterSection>
                <S.SectionTitle>Acesso rápido</S.SectionTitle>
                <S.Links>
                    <li>
                        <S.Link
                            title="Clique aqui para acessar a sessão de promoções"
                            to="/#on-sale"
                        >
                            Promoções
                        </S.Link>
                    </li>
                    <li>
                        <S.Link
                            title="Clique aqui para acessar a sessão de em breve"
                            to="/#coming-soon"
                        >
                            Em Breve
                        </S.Link>
                    </li>
                </S.Links>
            </S.FooterSection>
            <p>
                {new Date().getFullYear()} - &copy; E-PLAY Todos os direitos
                reservados
            </p>
        </div>
    </S.Container>
)

export default Footer
