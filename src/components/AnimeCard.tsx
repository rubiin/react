export interface IAnime {
  mal_id: string;
  title: string;
  url: string;
  images: Record<'jpg' | 'webp', any>;
  status: string;
}

export const AnimeCard = (props: { anime: IAnime }) => {
  const { url, mal_id, status, title, images } = props.anime;
  return (
    <div className="anime">
      <div>
        <p>{url}</p>
      </div>
      <div>
        <img
          src={
            images.jpg?.image_url
              ? images.jpg?.image_url
              : 'https://via.placeholder.com/400'
          }
          alt={title}
        />
      </div>
      <div>
        <a href={url}>{url}</a>
        <h3>{status}</h3>
      </div>
    </div>
  );
};
