import { useIsFetching } from 'react-query';
import { AnimeCard } from '@components';
import { IAnime } from '@types';
import { useAnimeStore } from '@store';

export const AnimeList = () => {
  const animes = useAnimeStore(state => state.animes);
  const isLoading = useIsFetching()

  return (
    <div className="container">
      {isLoading ? (
        <div className="empty">
          <h1>Loading, please wait..</h1>
        </div>
      ) : animes?.length > 0 ? (
        <div className="grid">
          {animes.map((anime: IAnime, index: number) => (
            <AnimeCard key={index} anime={anime} />
          ))
          }
        </div>
      ) : (
        <div className="empty">
          <h1>No anime found</h1>
        </div>
      )}
    </div>
  );
};
