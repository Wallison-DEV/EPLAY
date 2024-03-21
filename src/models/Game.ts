class Game {
    id: number
    title: string
    category: string
    system: string
    description: string
    infos: string[]
    image: string

    constructor(
        id: number,
        title: string,
        category: string,
        system: string,
        description: string,
        infos: string[],
        image: string
    ) {
        this.id = id
        this.title = title
        this.category = category
        this.system = system
        this.description = description
        this.infos = infos
        this.image = image
    }
}

export default Game
