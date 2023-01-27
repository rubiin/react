import { useEffect, useState } from 'react';
import { IAnime } from '../interfaces';
import { useAnimeStore } from '../stores';
import { AnimeCard } from '/@/components/AnimeCard';

export const AnimeList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const fetchAnime = useAnimeStore(state => state.fetch);
  const animes = useAnimeStore(state => state.animes);

  const searchMovie = async (name: string) => {
    setIsLoading(true);
    fetchAnime({ name });
    setIsLoading(false);
  };

  // on mount hook

  useEffect(() => {
    searchMovie('naruto');
  }, []);

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
