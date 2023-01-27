import { IAnime } from '../interfaces';

export const AnimeCard = (props: { anime: IAnime }) => {
  const { url, status, title, images } = props.anime;
  return (
    <div className="anime">
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        <img
          src={
            images.jpg?.image_url
              ? images.jpg?.image_url
              : 'https://via.placeholder.com/400'
          }
          alt={title}
          loading="lazy"
        />
      </div>
      <div>
        <a href={url}>{url}</a>
        <h3>{status}</h3>
      </div>
    </div>
  );
};
