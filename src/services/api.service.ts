import { IFetch, ISearch } from '@types';
import apiClient from './client';

export class ApiService {
  static createInstance(): ApiService {
    const activeInstance = new ApiService();
    return activeInstance;
  }

  getAnimeDetails = (opts: ISearch) => {
    const options: ISearch = {
      name: 'naruto',
      page: 1,
      limit: 6,
      sort: 'desc',
      ...opts,
    };
    return apiClient.get(
      `recommendations/anime?q=${options.name}&limit=${options.limit}&page=${options.page}&sort=${options.sort}`,
    );
  };

  getTrendingAnime = (opts?: IFetch) => {
    const options: IFetch = {
      page: 1,
      limit: 8,
      sort: 'desc',
      ...opts,
    };
    return apiClient.get(
      `trending?page=${options.page}&perPage=${options.limit}`,
    );
  };
}
