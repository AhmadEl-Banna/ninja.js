import { combineReducers } from 'redux';

import UsersReducer, { UsersState } from './users.duck';

export interface AppState {
  users: UsersState;
}

export default combineReducers({
  users: UsersReducer,
});
