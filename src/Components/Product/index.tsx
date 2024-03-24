import Tag from '../Tag'
import { Card, Descricao, Infos, Titulo } from './styles'

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
    const getDescricao = (descricao: string) => {
        if (descricao.length > 92) {
            return descricao.slice(0, 80) + '...'
        }
        return descricao
    }
    const getTitulo = (title: string) => {
        if (title.length > 24) {
            return title.slice(0, 24) + '...'
        }
        return title
    }
    return (
        <Card to={`/product/${id}`}>
            <img src={image} alt={title} />
            <Infos>
                {infos.map((info) => (
                    <Tag key={info}>{info}</Tag>
                ))}
            </Infos>
            <Titulo>{getTitulo(title)}</Titulo>
            <Tag>{category}</Tag>
            <Tag>{system}</Tag>
            <Descricao>{getDescricao(description)}</Descricao>
        </Card>
    )
}

export default Product
