import { IAnime } from '@types';

export const AnimeCard = (props: { anime: IAnime }) => {
  const { image, title ,malId,rating} = props.anime;
  return (
    <div className="anime">
      <div>
      <h3 className='view-anime'>View anime</h3>
      <span className='rating'>{rating}</span>
        <h3>{title.english}</h3>
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
        <a href={`https://myanimelist.net/anime/${malId}`}>{`https://myanimelist.net/anime/${malId}`}</a>
        <h3>{}</h3>
      </div>
    </div>
  );
};
