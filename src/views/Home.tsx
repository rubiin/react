import { useGetTrendingAnime } from '@services';

export const Home = () => {

  useGetTrendingAnime()
  return (
    <>
      <Search />
      <AnimeList />
    </>
  )
}

