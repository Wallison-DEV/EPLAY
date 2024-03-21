import ProductList from '../../Components/ProductList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import starWars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'

const Promoções: Game[] = [
    {
        id: 1,
        title: 'Resident Evil 4',
        category: 'Ação',
        system: 'PC',
        description:
            'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror e tiro em terceira pessoa desenvolvido e publicado pela Capcom, lançado originalmente para o GameCube em 2005. É o sexto jogo principal da franquia Resident Evil.',
        infos: ['25%', 'R$126,75'],
        image: resident,
    },
    {
        id: 2,
        title: 'Diablo 4',
        category: 'RPG',
        system: 'PC',
        description:
            'A batalha interminável entre o Paraíso Celestial e o Inferno Ardente continua, e o caos ameaça consumir Santuário. Com inúmeros demônios para matar, muitas habilidades para dominar, masmorras horripilantes e tesouros lendários, este vasto mundo aberto traz a promessa de aventura e devastação.',
        infos: ['50%', 'R$174,95'],
        image: diablo,
    },
    {
        id: 3,
        title: 'Star Wars',
        category: 'Ação',
        system: 'PS5',
        description:
            'STAR WARS Jedi: Survivor é uma história sombria ambientada em um universo que traz o seu melhor quando a dor e a perda estão no centro das emoções. Cinco anos após o jogo antecessor, STAR WARS Jedi: Fallen Order, essa sequência mostra Cal Kestis abandonado por sua tripulação anterior.',
        infos: ['55%', 'R$134,55'],
        image: starWars,
    },
    {
        id: 4,
        title: 'Zelda',
        category: 'Aventura',
        system: 'PS5',
        description:
            'The Legend of Zelda: Tears of the Kingdom é um jogo onde jogador controla Link enquanto ele procura pela Princesa Zelda e luta para evitar que Ganondorf destrua Hyrule ',
        infos: ['20%', 'R$289,00'],
        image: zelda,
    },
]
const EmBreve: Game[] = [
    {
        id: 5,
        title: 'Diablo 4',
        category: 'RPG',
        system: 'PC',
        description:
            'A batalha interminável entre o Paraíso Celestial e o Inferno Ardente continua, e o caos ameaça consumir Santuário. Com inúmeros demônios para matar, muitas habilidades para dominar, masmorras horripilantes e tesouros lendários, este vasto mundo aberto traz a promessa de aventura e devastação.',
        infos: ['50%', 'R$174,95'],
        image: diablo,
    },
    {
        id: 6,
        title: 'Zelda',
        category: 'Aventura',
        system: 'PS5',
        description:
            'The Legend of Zelda: Tears of the Kingdom é um jogo onde jogador controla Link enquanto ele procura pela Princesa Zelda e luta para evitar que Ganondorf destrua Hyrule ',
        infos: ['20%', 'R$289,00'],
        image: zelda,
    },
    {
        id: 7,
        title: 'Star Wars',
        category: 'Ação',
        system: 'PS5',
        description:
            'STAR WARS Jedi: Survivor é uma história sombria ambientada em um universo que traz o seu melhor quando a dor e a perda estão no centro das emoções. Cinco anos após o jogo antecessor, STAR WARS Jedi: Fallen Order, essa sequência mostra Cal Kestis abandonado por sua tripulação anterior.',
        infos: ['55%', 'R$134,55'],
        image: starWars,
    },
    {
        id: 8,
        title: 'Resident Evil 4',
        category: 'Ação',
        system: 'PC',
        description:
            'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror e tiro em terceira pessoa desenvolvido e publicado pela Capcom, lançado originalmente para o GameCube em 2005. É o sexto jogo principal da franquia Resident Evil.',
        infos: ['25%', 'R$126,75'],
        image: resident,
    },
]

export const Categories = () => (
    <>
        <ProductList title="Ação" background="gray" games={Promoções} />
        <ProductList title="RPG" background="black" games={EmBreve} />
        <ProductList title="Aventura" background="gray" games={Promoções} />
        <ProductList title="FPS" background="black" games={EmBreve} />
    </>
)
