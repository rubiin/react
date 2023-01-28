import { create } from 'zustand';
import { IAnime, IFetch } from '../types';
import { devtools, persist } from 'zustand/middleware';

interface AnimeState {
  animes: IAnime[];
  setAnime: (anime: IAnime) => void;
}

export const useAnimeStore = create<AnimeState>()(
  devtools(
    persist(
      (set, get) => ({
        animes: [],
        setAnime: anime =>
          set(state => {
            if (Array.isArray(anime)) {
              return { animes: [...anime] };
            }
            return { animes: state.animes.concat(anime) };
          }),
        getById: (id: number) =>
          get().animes.find(anime => anime.mal_id === id),
      }),
      {
        name: 'anime-store',
      },
    ),
  ),
);
