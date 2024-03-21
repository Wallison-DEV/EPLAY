import { TagContainer } from './styles'

export type TagProps = {
    size?: 'small' | 'big'
    children: string
}

const Tag = ({ size = 'small', children }: TagProps) => {
    return <TagContainer size={size}>{children}</TagContainer>
}

export default Tag
