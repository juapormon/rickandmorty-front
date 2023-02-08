import { infoResponse } from "../generic/types";

export interface Episode {
  name: string;
  episode: string;
  air_date: string;
}

export interface EpisodeFromAPI {
  id: string;
  name: string;
  air_date: string;
  episode: string;
  characters: Array<string>;
  url: string;
  created: string;
}

export interface EpisodesFromAPI {
  info: infoResponse;
  results: Array<EpisodeFromAPI>;
}
