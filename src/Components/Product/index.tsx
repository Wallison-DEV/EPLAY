import Tag from '../Tag'
import { Card, Descricao, Infos, Titulo } from './styles'

type ProductProps = {
    title: string
    category: string
    system: string
    description: string
    infos: string[]
    image: string
}

const Product = ({
    title,
    category,
    system,
    description,
    infos,
    image,
}: ProductProps) => (
    <Card>
        <img src={image} alt={title} />
        <Infos>
            {infos.map((info) => (
                <Tag key={info}>{info}</Tag>
            ))}
        </Infos>
        <Titulo>{title}</Titulo>
        <Tag>{category}</Tag>
        <Tag>{system}</Tag>
        <Descricao>{description}</Descricao>
    </Card>
)

export default Product
