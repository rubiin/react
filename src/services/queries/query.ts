import { useQuery } from 'react-query';
import { AxiosResponse } from 'axios';
import { ApiService } from '../api-service';
import { ISearch } from '/@/interfaces';
import { useAnimeStore } from '/@/store';

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
      const response: AxiosResponse = await animeService.getAnimeDetails(opts);
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
