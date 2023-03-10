import { infoResponse } from "../generic/types";

export interface Location {
  name: string;
  type: string;
  residents: Array<string>;
  dimension: string;
}

export interface LocationFromAPI {
  id: string;
  name: string;
  type: string;
  dimension: string;
  residents: Array<string>;
  url: string;
  created: string;
}

export interface LocationsFromAPI {
  info: infoResponse;
  results: Array<LocationFromAPI>;
}
