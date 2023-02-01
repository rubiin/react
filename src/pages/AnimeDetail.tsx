import '@scss/AnimeDetail.scss'
import { useAnimeStore } from '@store'
import { useParams } from 'react-router-dom';

export const AnimeDetail = (props: any) => {
  const { id } = useParams();
  const anime = useAnimeStore(state => state.getById(id as string))
  return (
    <div className="detail">
        <div className="detail__cover">
          <div className='gradient'></div>
          <img src="https://i.animepahe.com/covers/cover_default0.jpg"></img>
        </div>
        <div className="detail__info">
          <img src="https://i.animepahe.com/posters/72fef5cb6ac6378b158c7c7e17bd8080.jpg" alt="" />
          <h3>{anime?.title.english}</h3>
          </div>
    </div>
  )
}
