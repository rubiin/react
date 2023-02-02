import NarutoIcon from '@images/naruto.png';

export const Header = () => {
  return (
    <header>
      <Link to="/">
      <div className="brand">
      <img
        src={NarutoIcon}
        alt="Naruto Icon"
      />

      <h1>Animeland</h1>
      </div>
      </Link>
      <nav>
        <ul>
      <li><Link to="/"><a href="">Home</a></Link></li>
      <li><Link to="/"><a href="">Anime List</a></Link></li>
      <li><Link to="/"><a href="">New Season</a></Link></li>
        </ul>
        </nav>
    </header>
  );
};
