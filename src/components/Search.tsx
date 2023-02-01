import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { t } = useTranslation();
  const place = t('search');

  return (
    <div className="search flex">
      <input
        type="text"
        placeholder={place}
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
    </div>
  );
};
