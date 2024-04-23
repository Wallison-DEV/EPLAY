import { useState } from 'react'

import Section from '../Section'

import * as S from './styles'

import zoomIcon from '../../assets/icons/mais-zoom.png'
import playIcon from '../../assets/icons/botao-play.png'
import closeIcon from '../../assets/icons/close.png'

type GalleryProps = {
    defaultCover: string
    name: string
    items: GalleryItemProps[]
}
interface ModalState extends GalleryItemProps {
    isVisible: boolean
}

const Gallery = ({ defaultCover, name, items }: GalleryProps) => {
    const [modal, setModal] = useState<ModalState>({
        isVisible: false,
        type: 'image',
        url: '',
    })

    const getMediaCover = (item: GalleryItemProps) => {
        if (item.type == 'image') return item.url
        return defaultCover
    }
    const getMediaIcon = (item: GalleryItemProps) => {
        if (item.type == 'image') return zoomIcon
        return playIcon
    }

    const closeModal = () => {
        setModal({
            isVisible: false,
            type: 'image',
            url: '',
        })
    }

    return (
        <>
            <Section title="Galeria" background="black">
                <S.Items>
                    {items.map((media, index) => (
                        <S.Item
                            key={media.url}
                            onClick={() => {
                                setModal({
                                    isVisible: true,
                                    type: media.type,
                                    url: media.url,
                                })
                            }}
                        >
                            <img
                                src={getMediaCover(media)}
                                alt={`Mídia ${index + 1} de ${name}`}
                            />
                            <S.Action>
                                <img
                                    src={getMediaIcon(media)}
                                    alt="Clique para maximizar a mídia"
                                />
                            </S.Action>
                        </S.Item>
                    ))}
                </S.Items>
            </Section>
            <S.Modal className={modal.isVisible ? 'is-visible' : ''}>
                <S.ModalContent className="container">
                    <header>
                        <h4>{name}</h4>
                        <img
                            src={closeIcon}
                            alt="Fechar"
                            onClick={() => closeModal()}
                        />
                    </header>
                    {modal.type === 'image' ? (
                        <img src={modal.url} alt="Homem Aranha" />
                    ) : (
                        <iframe frameBorder={0} src={modal.url} />
                    )}
                </S.ModalContent>
                <div onClick={() => closeModal()} className="overlay"></div>
            </S.Modal>
        </>
    )
}

export default Gallery
