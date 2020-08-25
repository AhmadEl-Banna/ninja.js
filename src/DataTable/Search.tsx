import React, { FunctionComponent } from 'react'

const Search: FunctionComponent<{ onSearch:(event:React.ChangeEvent<HTMLInputElement>)=>void}>= ({ onSearch } ) => {


  return (
    <div className="p-b-1">
      <input
        type="search"
        className="form-control"
        placeholder="Søg brugere"
        onChange={onSearch} />
    </div>
  )
}

export default Search
