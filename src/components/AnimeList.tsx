import { useIsFetching } from '@tanstack/react-query';
import { AnimeCard } from '@components';
import { IAnime } from '@types';
import { useAnimeStore } from '@store';
import { useTranslation } from 'react-i18next';

export const AnimeList = () => {
  const animes = useAnimeStore(state => state.animes);
  const isLoading = useIsFetching()
  const { t } = useTranslation();


  return (
    <main className="container">
      {isLoading ? (
        <div className="empty">
          <svg version="1.1" id="L5" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            viewBox="0 0 100 100" enable-background="new 0 0 0 0" >
            <circle fill="#fff" stroke="none" cx="6" cy="50" r="6">
              <animateTransform
                attributeName="transform"
                dur="1s"
                type="translate"
                values="0 15 ; 0 -15; 0 15"
                repeatCount="indefinite"
                begin="0.1" />
            </circle>
            <circle fill="#fff" stroke="none" cx="30" cy="50" r="6">
              <animateTransform
                attributeName="transform"
                dur="1s"
                type="translate"
                values="0 10 ; 0 -10; 0 10"
                repeatCount="indefinite"
                begin="0.2" />
            </circle>
            <circle fill="#fff" stroke="none" cx="54" cy="50" r="6">
              <animateTransform
                attributeName="transform"
                dur="1s"
                type="translate"
                values="0 5 ; 0 -5; 0 5"
                repeatCount="indefinite"
                begin="0.3" />
            </circle>
          </svg>

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
    </main>
  );
};
