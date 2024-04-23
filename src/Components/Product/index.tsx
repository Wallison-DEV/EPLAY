import Tag from '../Tag'
import * as S from './styles'

type ProductProps = {
    title: string
    category: string
    system: string
    description: string
    infos: string[]
    image: string
    id: number
}

const Product = ({
    title,
    category,
    system,
    description,
    infos,
    image,
    id,
}: ProductProps) => {
    const getDescricao = (text: string) => {
        if (text.length > 92) {
            return text.slice(0, 80) + '...'
        }
        return text
    }
    const getTitulo = (title: string) => {
        if (title.length > 24) {
            return title.slice(0, 24) + '...'
        }
        return title
    }
    return (
        <S.Card
            title={`Clique aqui para ver mais detalhes do jogo: ${title}`}
            to={`/product/${id}`}
        >
            <img src={image} alt={title} />
            <S.Infos>
                {infos.map((info) => (
                    <Tag key={info}>{info}</Tag>
                ))}
            </S.Infos>
            <S.Title>{getTitulo(title)}</S.Title>
            <Tag>{category}</Tag>
            <Tag>{system}</Tag>
            <S.Description>{getDescricao(description)}</S.Description>
        </S.Card>
    )
}

export default Product
