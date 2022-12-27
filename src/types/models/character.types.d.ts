import { infoResponse } from "../generic/types"

export interface Character{
    name: string
    gender: string
    episode: Array<string>
    image: string
}

export interface CharacterFromAPI{
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: BaseUrlType
    location: BaseUrlType
    image: string
    episode: Array<string>
    url: string
    created: string
}

export interface CharactersFromAPI{
    info: infoResponse
    results: Array<CharacterFromAPI>
}

