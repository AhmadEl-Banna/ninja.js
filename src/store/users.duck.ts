import produce, { Draft } from 'immer';
import isEmpty from 'lodash/isEmpty';
import { Reducer } from 'redux';
import { createSelector } from 'reselect';

import { User } from '../User';
import { AppState } from './rootReducer';
import { Action, ActionCreator, createReducer } from './utils';

// Actions
const SEARCH = 'users/search';
const CHANGE_PAGE = 'users/changePage';
// Action Types
export type SearchAction = Action<string>;
export type ChangePageAction = Action<number>;

// State
export interface UsersState {
  users: User[];
  currentPageNumber: number;
  pageSize: number;
  searchText: string;
}

const initialState: UsersState = {
  users: [
    { name1: 'Mads L. Klausen', email: 'MadsLKlausen@jourrapide.com', edit_path: 'http://google.com', per_id: 1 },
    { name1: 'Alfred K. Krogh', email: 'AlfredKKrogh@armyspy.com', edit_path: 'http://google.com', per_id: 2 },
    { name1: 'Silas L. Bertelsen', email: 'SilasLBertelsen@armyspy.com', edit_path: 'http://google.com', per_id: 3 },
    { name1: 'Mia A. Johnsen', email: 'MiaAJohnsen@dayrep.com', edit_path: 'http://google.com', per_id: 4 },
    { name1: 'Alfred S. Schou', email: 'AlfredSSchou@jourrapide.com', edit_path: 'http://google.com', per_id: 5 },
    { name1: 'Emilie T. Lassen', email: 'EmilieTLassen@rhyta.com', edit_path: 'http://google.com', per_id: 6 },
    { name1: 'Maria C. Eriksen', email: 'MariaCEriksen@armyspy.com', edit_path: 'http://google.com', per_id: 7 },
    { name1: 'Julius K. Kristiansen', email: 'JuliusKKristiansen@rhyta.com', edit_path: 'http://google.com', per_id: 8 },
    { name1: 'Nicklas M. Vestergaard', email: 'NicklasMVestergaard@rhyta.com', edit_path: 'http://google.com', per_id: 9 },
    { name1: 'August N. Frandsen', email: 'AugustNFrandsen@rhyta.com', edit_path: 'http://google.com', per_id: 10 },
    { name1: 'Bertram L. Brandt', email: 'BertramLBrandt@teleworm.us', edit_path: 'http://google.com', per_id: 11 },
  ],
  currentPageNumber: 0,
  pageSize: 5,
  searchText: '',
};
// Reducers

const search: Reducer<UsersState | undefined, SearchAction> = (state, { payload }) =>
  produce(state, (draft: Draft<UsersState>) => {
    if (payload) {
      draft.searchText = payload;
    }
  });

const changePage: Reducer<UsersState | undefined, ChangePageAction> = (state, { payload }) =>
  produce(state, (draft: Draft<UsersState>) => {
    if (payload !== undefined) draft.currentPageNumber = payload;
  });

// Root reducer
export default createReducer(initialState, {
  [SEARCH]: search,
  [CHANGE_PAGE]: changePage,
});

// Action Creators

export const SearchActionCreator: ActionCreator<string> = (payload) => ({
  type: SEARCH,
  payload,
});
export const ChangePageActionCreator: ActionCreator<number> = (payload) => ({
  type: CHANGE_PAGE,
  payload,
});

// Selectors

export const getCurrentPageNumber = (state: AppState) => state.users.currentPageNumber;
export const getSearchText = (state: AppState) => state.users.searchText;
export const getUsers = (state: AppState) => state.users.users;
export const getPageSize = (state: AppState) => state.users.pageSize;

export const getSearchResults = createSelector(getUsers, getSearchText, (users, searchText) => {
  if (searchText && !isEmpty(searchText)) {
    return users.filter((row) => {
      return (
        row.name1.toLowerCase().search(searchText.toLowerCase()) > -1 ||
        (row.email && row.email.toLowerCase().search(searchText.toLowerCase()) > -1)
      );
    });
  }
  return users;
});

export const calculateTotalNumberOfPages = createSelector(getPageSize, getSearchResults, (pageSize, users) =>
  Math.ceil(users.length / pageSize)
);

export const geDisplayUsers = createSelector(getSearchResults, getPageSize, getCurrentPageNumber, (users, pageSize, currentPageNumber) => {
  return users.slice(currentPageNumber * pageSize, (currentPageNumber + 1) * pageSize);
});
