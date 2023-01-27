export interface IAnime {
  title: string;
  url: string;
  mal_id: number;
  images: Record<'jpg' | 'webp', any>;
  status: string;
}

export interface IFetch {
  name: string;
  limit?: number;
  page?: number;
  sort?: string;
}
