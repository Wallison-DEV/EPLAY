import { ButtonContainer, ButtonLink } from './styles'

export type ButtonProps = {
    type: 'button' | 'link' | 'submit'
    title: string
    to?: string
    onClick?: () => void
    children: string
    variant?: 'primary' | 'secondary'
    disabled?: boolean
}

const Button = ({
    type,
    title,
    children,
    onClick,
    to,
    variant = 'primary',
    disabled,
}: ButtonProps) => {
    const handleClick = () => {
        if (onClick) {
            onClick()
        }
    }
    if (type === 'button' || type === 'submit') {
        return (
            <ButtonContainer
                variant={variant}
                type={type}
                title={title}
                onClick={handleClick}
                disabled={disabled}
            >
                {children}
            </ButtonContainer>
        )
    }

    return (
        <ButtonLink
            to={to as string}
            title={title}
            onClick={onClick ? handleClick : undefined}
        >
            {children}
        </ButtonLink>
    )
}

export default Button
