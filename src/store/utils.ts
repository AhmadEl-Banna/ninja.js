import { Reducer, Action as RawAction } from 'redux';

export interface Action<Payload> extends RawAction<string> {
  payload?: Payload;
}

export type ActionCreator<Payload> = (payload?: Payload) => Action<Payload>;

// use this function to septate switch case reducers to dictionary of small reducers as values and Action types as key
export default function createReducer<TState>(
  initialState: TState,
  handler: {
    [action: string]: Reducer<TState, RawAction>;
  }
): Reducer<TState, RawAction> {
  return (state = initialState, action: RawAction): TState => {
    if (action.type && handler[action.type]) {
      return handler[action.type](state, action);
    } else return state;
  };
}
