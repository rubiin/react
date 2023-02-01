import { IAnime } from '@types';
import { Link } from 'react-router-dom';

export const AnimeCard = (props: { anime: IAnime, onClick: any }) => {
  const { image, title ,malId,rating,id,genres} = props.anime;
  return (
    <div className="anime" onClick={props.onClick} >
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
        <h4>Genre: {genres}</h4>
        <a href={`https://myanimelist.net/anime/${malId}`}>View on myanimelist</a>
      </div>
    </div>
  );
};
