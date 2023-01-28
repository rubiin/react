import { useQuery } from 'react-query';
import { ApiService } from '../api-service';
import { ISearch } from '@types';
import { useAnimeStore } from '@store';

/**
 *
 * @returns Deals with my request details api
 * Caching handled by react query
 */
export const useGetAnimeDetails = (opts: ISearch) => {
  const animeService = ApiService.createInstance();
  const setAnime = useAnimeStore(state => state.setAnime);

  return useQuery(
    ['anime', opts.name, opts.limit],
    async () => {
      const response = await animeService.getAnimeDetails(opts);
      return response.data.data;
    },
    {
      onSuccess: data => {
        setAnime(data);
      },
      retry: false,
    },
  );
};
