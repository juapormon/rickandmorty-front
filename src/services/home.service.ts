import axios from 'axios';
import { UrlProvider } from 'providers/UrlProvider';
import { CharactersFromAPI } from 'types/models/character.types';
import { EpisodesFromAPI } from 'types/models/episode.types';
import { LocationsFromAPI } from 'types/models/location.types';

export const HomeService = {

    getApiURLs: async () => {
        const response = await axios.get(UrlProvider.getBaseURL());
        const { data } = response ?? {};
        return data;
    },

    getCharacters: async (): Promise<CharactersFromAPI> => {
        const response = await axios.get(UrlProvider.getCharacterURL());
        const { data } = response ?? {};
        return data;
    },

    getEpisodes: async (): Promise<EpisodesFromAPI> => {
        const response = await axios.get(UrlProvider.getEpisodeURL());
        const { data } = response ?? {};
        return data;
    },

    getLocations: async (): Promise<LocationsFromAPI> => {
        const response = await axios.get(UrlProvider.getLocationURL());
        const { data } = response ?? {};
        return data;
    }
}