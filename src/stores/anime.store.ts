import { create } from 'zustand';
import { IAnime, IFetch } from '../interfaces';
import axios from '/@/http/axios';

interface AnimeState {
  animes: IAnime[];
  fetch: ({ name, limit = 8 }: IFetch) => Promise<void>;
}

const API_URL = 'https://api.jikan.moe/v4/anime?q=naruto';

export const useAnimeStore = create<AnimeState>()((set, get) => ({
  animes: [],
  fetch: async ({ name, limit = 8 }: IFetch) => {
    const { data } = await axios.get(
      `${API_URL}/search/anime?q=${name}&limit=${limit}`,
    );
    set({ animes: data.data });
  },
  getById: (id: number) => {
    return get().animes.find(anime => anime.mal_id === id);
  },
}));
