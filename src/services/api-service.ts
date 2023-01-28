import { IAnime, ISearch } from '@types';
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
      `anime?q=${options.name}&limit=${options.limit}&page=${options.page}&sort=${options.sort}`,
    );
  };
}
