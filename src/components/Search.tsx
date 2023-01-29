import { useState } from 'react';

import SearchIcon from '@images/search.svg';
import { useTranslation } from 'react-i18next';
import { useGetAnimeDetails } from '@services';

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  useGetAnimeDetails({ name: searchTerm ?? 'naruto' });
  const { t } = useTranslation();
  const place = t('search');

  return (
    <div className="search">
      <input
        type="text"
        placeholder={place}
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <img src={SearchIcon} />
    </div>
  );
};
