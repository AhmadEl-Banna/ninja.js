import React, { FunctionComponent } from 'react';
import get from 'lodash/get';

const Search: FunctionComponent<{ onSearch: (searchText: string) => void }> = ({ onSearch }) => {
  return (
    <div className="p-b-1">
      <input
        type="search"
        className="form-control"
        placeholder="Søg brugere"
        onChange={(event) => {
          const value = get(event, 'target.value', '');
          onSearch(value);
        }}
      />
    </div>
  );
};

export default Search;
