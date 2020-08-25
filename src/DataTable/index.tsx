import React, { FunctionComponent, useCallback } from 'react';

import Pagination from './Pagination';
import Row from './Row';
import Search from './Search';
import { useSelector, useDispatch } from 'react-redux';
import {
  calculateTotalNumberOfPages,
  SearchActionCreator,
  ChangePageActionCreator,
  geDisplayUsers,
  getCurrentPageNumber,
} from '../store/users.duck';

export interface DataTablePropsType {
  rows: any[];
  rowsPerPage: number;
  locale: string;
}

const useSearchHook = () => {
  const dispatch = useDispatch();
  return useCallback(
    (searchText: string) => {
      dispatch(SearchActionCreator(searchText));
    },
    [dispatch]
  );
};

const useChangePageNumber = () => {
  const dispatch = useDispatch();
  return useCallback(
    (pageNumber: number) => {
      dispatch(ChangePageActionCreator(pageNumber));
    },
    [dispatch]
  );
};

const UsersDataTable: FunctionComponent = () => {
  const totalNumberOfPages = useSelector(calculateTotalNumberOfPages);
  const search = useSearchHook();
  const changeToPageNumber = useChangePageNumber();
  const currentPageNumber = useSelector(getCurrentPageNumber);
  const users = useSelector(geDisplayUsers);
  console.log('uSers', users);
  const rowsToRender = users.map((row) => <Row key={row.per_id} row={row} />);
  return (
    <div>
      <Search onSearch={search} />
      <table>
        <tbody>{rowsToRender}</tbody>
      </table>
      <Pagination currentPageNumber={currentPageNumber} totalNumberOfPages={totalNumberOfPages} onChange={changeToPageNumber} />
    </div>
  );
};

export default UsersDataTable;
