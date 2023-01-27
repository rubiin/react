import axios, { AxiosRequestConfig } from 'axios';
import { ISearch } from '../interfaces';
import apiClient from './client';

export class ApiService {
  config: AxiosRequestConfig = {};

  private cancellationToken = axios.CancelToken.source();

  static createInstance(): ApiService {
    const activeInstance = new ApiService();
    activeInstance.cancellationToken = axios.CancelToken.source();
    activeInstance.config.cancelToken = activeInstance.cancellationToken.token;
    return activeInstance;
  }

  cancelRequests() {
    this.cancellationToken.cancel('RequestCancellation');
    return ApiService.createInstance();
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
