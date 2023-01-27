import '/@/scss/App.scss';
import { AnimeList, Header, Search } from './components';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <Header />
        <Search />
        <AnimeList />
      </div>
    </QueryClientProvider>
  );
}

export default App;
