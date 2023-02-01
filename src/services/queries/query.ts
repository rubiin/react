import { useQuery } from '@tanstack/react-query';
import { IFetch, ISearch } from '@types';
import { useAnimeStore } from '@store';
import { ApiService } from '@services';

/**
 *
 * @returns Deals with my request details api
 * Caching handled by react query
 */
export const useGetAnimeDetails = (opts: ISearch) => {
  const animeService = ApiService.createInstance();
  const setAnime = useAnimeStore(state => state.setAnime);

  return useQuery({
    queryKey: ['searchedAnime', opts.name, opts.limit, opts.page],
    queryFn: async () => {
      const response = await animeService.getAnimeDetails(opts);
      return response.data.results;
    },
    onSuccess: data => {
      setAnime(data);
    },
    retry: false,
  });
};

export const useGetTrendingAnime = (opts?: IFetch) => {
  const animeService = ApiService.createInstance();
  const setAnime = useAnimeStore(state => state.setAnime);

  return useQuery({
    queryKey: ['trendingAnime'],
    queryFn: async () => {
      const response = await animeService.getTrendingAnime(opts);
      return response.data.results;
    },
    onSuccess: data => {
      setAnime(data);
    },
    retry: false,
  });
};
