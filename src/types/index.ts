export interface Title {
  romaji: string;
  english: string;
  native: string;
  userPreferred: string;
}

export interface IAnime {
  id: string;
  malId: number;
  title: Title;
  image: string;
  rating: number;
  color: string;
  episodeId: string;
  episodeTitle: string;
  episodeNumber: number;
  genres: string[];
  type: string;
}


export interface IFetch {
  limit?: number;
  page?: number;
  sort?: string;
}

export interface ISearch extends IFetch {
  name?: string;
}
