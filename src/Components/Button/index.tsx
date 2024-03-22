import { ButtonContainer, ButtonLink } from './styles'

export type ButtonProps = {
    type: 'button' | 'link'
    title: string
    to?: string
    onClick?: () => void
    children: string
    variant?: 'primary' | 'secondary'
}

const Button = ({
    type,
    title,
    children,
    onClick,
    to,
    variant = 'primary',
}: ButtonProps) => {
    if (type == 'button') {
        return (
            <ButtonContainer
                variant={variant}
                type="button"
                title={title}
                onClick={onClick}
            >
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
