import { useState } from 'react'

import Section from '../Section'
import { Action, Item, Items, Modal, ModalContent } from './styles'

import zoomIcon from '../../assets/icons/mais-zoom.png'
import playIcon from '../../assets/icons/botao-play.png'
import closeIcon from '../../assets/icons/close.png'

import { GalleryItemProps } from '../../Pages/Home'
type GalleryProps = {
    defaultCover: string
    name: string
    items: GalleryItemProps[]
}

interface ModalState extends GalleryItemProps {
    estaVisivel: boolean
}

const Gallery = ({ defaultCover, name, items }: GalleryProps) => {
    const [modal, setModal] = useState<ModalState>({
        estaVisivel: false,
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
            estaVisivel: false,
            type: 'image',
            url: '',
        })
    }

    return (
        <>
            <Section title="Galeria" background="black">
                <Items>
                    {items.map((media, index) => (
                        <Item
                            key={media.url}
                            onClick={() => {
                                setModal({
                                    estaVisivel: true,
                                    type: media.type,
                                    url: media.url,
                                })
                            }}
                        >
                            <img
                                src={getMediaCover(media)}
                                alt={`Mídia ${index + 1} de ${name}`}
                            />
                            <Action>
                                <img
                                    src={getMediaIcon(media)}
                                    alt="Clique para maximizar a mídia"
                                />
                            </Action>
                        </Item>
                    ))}
                </Items>
            </Section>
            <Modal className={modal.estaVisivel ? 'visivel' : ''}>
                <ModalContent className="container">
                    <header>
                        <h4>${name}</h4>
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
                </ModalContent>
                <div onClick={() => closeModal()} className="overlay"></div>
            </Modal>
        </>
    )
}

export default Gallery
