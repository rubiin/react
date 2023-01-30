import '@scss/App.scss';
import { AnimeList, Search } from './components';
import './i18n/config';
import MainLayout from './layout/MainLayout';

function App() {

  return (
      <MainLayout>
        <Search />
        <AnimeList />
      </MainLayout>
  );
}

export default App;
