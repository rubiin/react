import '@scss/App.scss';
import { AnimeList, Header, Search } from './components';
import './i18n/config';

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
