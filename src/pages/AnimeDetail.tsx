import '@scss/AnimeDetail.scss'
import { useAnimeStore } from '@store'
import { useParams } from 'react-router-dom';

export const AnimeDetail = (props: any) => {
  const { id } = useParams();
  const anime = useAnimeStore(state => state.getById(id as string))
  console.log({anime})
  return (
    <div className="detail">
        <div className="detail__cover">
          <div className='gradient'></div>
          <img src={anime?.cover}></img>
        </div>
        <div className="detail__info">
          <img src={anime?.image} alt="" />
          <h3>{anime?.title.english}</h3>
          </div>
    </div>
  )
}
