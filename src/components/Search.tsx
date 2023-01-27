import { useState } from 'react';

import SearchIcon from '../resources/images/search.svg';
import { useGetAnimeDetails } from '../services/queries/query';

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  useGetAnimeDetails({ name: searchTerm || 'naruto' });

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search for an anime"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <img src={SearchIcon} />
    </div>
  );
};
