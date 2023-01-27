import { useGetAnimeDetails } from '../services/queries/query';
import { AnimeCard } from '/@/components';
import { IAnime } from '/@/interfaces';
import { useAnimeStore } from '/@/store';

export const AnimeList = () => {
  const animes = useAnimeStore(state => state.animes);
  const isLoading = useAnimeStore(state => state.isLoading);

  return (
    <div className="container">
      {isLoading ? (
        <div className="empty">
          <h1>Loading, please wait..</h1>
        </div>
      ) : animes?.length > 0 ? (
        animes.map((anime: IAnime, index: number) => (
          <AnimeCard key={index} anime={anime} />
        ))
      ) : (
        <div className="empty">
          <h1>No anime found</h1>
        </div>
      )}
    </div>
  );
};
