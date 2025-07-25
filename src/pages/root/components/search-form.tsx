import React, { useState } from 'react';

import { Buttons, Forms } from 'src/components';
import { useSearchQuery } from 'src/pages/root/hooks/use-search-query.ts';

export const SearchForm = () => {
  const { getQuery, setQuery, clearQuery } = useSearchQuery();
  const [search, setSearch] = useState(getQuery());

  const onClearSearch = () => {
    clearQuery();
    setSearch('');
  };

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);

  const onSubmit = () => {
    if (getQuery() === search) return;
    setQuery(search);
  };

  return (
    <Forms.Form className="w-full flex gap-2 flex-nowrap" onSubmit={onSubmit}>
      <Forms.Input value={search} onChange={onSearch} placeholder="Seach repository by name, description, etc..." />
      <Buttons.Base type="submit">Search</Buttons.Base>
      <Buttons.Base type="button" disabled={!search} onClick={onClearSearch}>
        Clear
      </Buttons.Base>
    </Forms.Form>
  );
};
