import { IAnime } from '@types';
import { useAnimeStore } from '@store';
import Loading from '@images/loading.svg';

export const AnimeList = () => {
  const animes = useAnimeStore(state => state.animes);
  const isLoading = useIsFetching()
  const { t } = useTranslation();
  const navigate = useNavigate();


  return (
    <main className="container">
      {isLoading ? (
        <div className="empty">
          <Loading/>
        </div>
      ) : animes?.length > 0 ? (
        <div className="grid">
          {animes.map((anime: IAnime, index: number) => (
            <AnimeCard key={index} anime={anime}
            onClick={() => navigate(`/anime/${anime.id}`)}
            />
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
