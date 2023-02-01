import { create } from 'zustand';
import { IAnime, IFetch } from '@types';
import { devtools, persist } from 'zustand/middleware';

interface AnimeState {
  animes: IAnime[];
  setAnime: (anime: IAnime) => void;
  getById: (id: string) => IAnime | undefined;
}

export const useAnimeStore = create<AnimeState>()(
  devtools(
    (set, get) => ({
      animes: [],
      setAnime: anime =>
        set(state => {
          if (Array.isArray(anime)) {
            return { animes: [...anime] };
          }
          return { animes: state.animes.concat(anime) };
        }),
      getById: (id: string) => get().animes.find(anime => anime.id === id),
    }),
    {
      name: 'animeStore',
    },
  ),
);
