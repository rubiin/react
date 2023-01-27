import '/@/scss/App.scss';
import { AnimeList, Header, Search } from './components';

function App() {
  return (
    <div className="app">
      <Header />
      <Search />
      <AnimeList />
    </div>
  );
}

export default App;
