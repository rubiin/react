import { useState } from 'react';
import { useAnimeStore } from '/@/store';

import SearchIcon from '../resources/images/search.svg';

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const fetchAnime = useAnimeStore(state => state.fetch);
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search for an anime"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <img src={SearchIcon} onClick={() => fetchAnime({ name: searchTerm })} />
    </div>
  );
};
