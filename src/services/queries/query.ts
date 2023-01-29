import { useQuery } from '@tanstack/react-query';
import { ISearch } from '@types';
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
    queryKey: ['anime', opts.name, opts.limit],
    queryFn: async () => {
      const response = await animeService.getAnimeDetails(opts);
      return response.data.data;
    },
    onSuccess: data => {
      setAnime(data);
    },
    retry: false,
  });
};
