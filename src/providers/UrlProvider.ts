const baseUrl = "https://rickandmortyapi.com/api"
const characterUrl = "/character"
const episodeUrl = "/episode"
const locationUrl = "/location"

export const UrlProvider = {
    
    getBaseURL(){
        return baseUrl
    },
    getCharacterURL(){
        return baseUrl + characterUrl
    },
    getEpisodeURL(){
        return baseUrl + episodeUrl
    },
    getLocationURL(){
        return baseUrl + locationUrl
    }
}