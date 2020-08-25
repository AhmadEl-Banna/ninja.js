import { Action, ActionCreator } from './utils';
import { User } from '../User';
// Actions
const SEARCH = 'users/search';
const CHANGE_PAGE = 'users/changePage';
// Action Types
export type SearchAction = Action<string>;
export type ChangePageAction = Action<number>;

// Reducers
export interface UsersState {
  users: User[];
  currentPageNumber: number;
  pageSize: number;
}

// Root reducer

// Action Creators

export const Search: ActionCreator<string> = (payload) => ({
  type: SEARCH,
  payload,
});
export const ChangePage: ActionCreator<number> = (payload) => ({
  type: CHANGE_PAGE,
  payload,
});
