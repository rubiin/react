import NarutoIcon from '../resources/images/naruto.png';

export const Header = () => {
  return (
    <div className="flex container">
      <img
        src={NarutoIcon}
        style={{ padding: '0 6px 0 6px', height: '60px' }}
      />
      <h1>Animeland</h1>
    </div>
  );
};
