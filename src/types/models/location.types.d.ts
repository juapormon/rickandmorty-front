import { infoResponse } from "../generic/types"

export interface Location{
    name: string
    type: string
    residents: Array<string>
}

export interface LocationFromAPI{
    id: string
    name: string
    type: string
    residents: Array<string>
    url: string
    created: string
}

export interface LocationsFromAPI{
    info: infoResponse
    results: Array<LocationFromAPI>
}