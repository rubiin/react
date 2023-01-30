import NarutoIcon from '@images/naruto.png';

export const Header = () => {
  return (
    <header className="flex container">
      <img
        src={NarutoIcon}
      />
      <h1>Animeland</h1>
    </header>
  );
};
