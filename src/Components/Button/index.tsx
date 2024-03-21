import { ButtonContainer, ButtonLink } from './styles'

type ButtonProps = {
    type: 'button' | 'link'
    title: string
    to?: string
    onClick?: () => void
    children: string
}

const Button = ({ type, title, children, onClick, to }: ButtonProps) => {
    if (type == 'button') {
        return (
            <ButtonContainer type="button" title={title} onClick={onClick}>
                {children}
            </ButtonContainer>
        )
    }

    return (
        <ButtonLink to={to as string} title={title}>
            {children}
        </ButtonLink>
    )
}

export default Button
