import { IAnime } from '@types';
import { Link } from 'react-router-dom';

export const AnimeCard = (props: { anime: IAnime }) => {
  const { image, title ,malId,rating,id} = props.anime;
  return (
    <Link to={`/anime/${id}`}>
    <div className="anime">
      <div>
      <span className='rating'>{rating}</span>
        <h4 style={{color: "whitesmoke"}}>{title.english}</h4>
      </div>
      <div>
        <img
          src={
            image
              ? image
              : 'https://via.placeholder.com/400'
          }
          alt={title.english}
          loading="lazy"
        />
      </div>
      <div>
        <h3>aaa</h3>
        <a href={`https://myanimelist.net/anime/${malId}`}>View on myanimelist</a>
      </div>
    </div>
    </Link>
  );
};
