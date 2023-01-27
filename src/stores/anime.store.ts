import { create } from 'zustand';
import { IAnime, IFetch } from '../interfaces';
import { devtools, persist } from 'zustand/middleware';

interface AnimeState {
  animes: IAnime[];
  isLoading: boolean;
  setAnime: (anime: IAnime) => void;
  setIsLoading: (isLoading: boolean) => void;
}

export const useAnimeStore = create<AnimeState>()(
  devtools(
    persist(
      (set, get) => ({
        animes: [],
        isLoading: true,
        setAnime: anime =>
          set(state => {
            if (Array.isArray(anime)) {
              return { animes: [...anime] };
            }
            return { animes: state.animes.concat(anime) };
          }),
        setIsLoading: isLoading => set(() => ({ isLoading })),
        getById: (id: number) =>
          get().animes.find(anime => anime.mal_id === id),
      }),
      {
        name: 'anime-store',
      },
    ),
  ),
);
