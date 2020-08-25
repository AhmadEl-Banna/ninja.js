import { Reducer } from 'redux';
import { Action } from './utils';
import { User } from '../User';

const rootReducer: Reducer<{ users?: User[] }, Action<undefined>> = (state) => ({ ...state });

export default rootReducer;
