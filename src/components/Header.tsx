import NarutoIcon from '/@/assets/naruto.png';

export const Header = () => {
  return (
    <div className="container">
      <img
        src={NarutoIcon}
        style={{ padding: '0 6px 0 6px', height: '60px' }}
      />
      <h1>Animeland</h1>
    </div>
  );
};
