import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

export default function configureStore() {
  const middleware: any[] = [];
  return createStore(
    rootReducer,
    process.env.NODE_ENV === 'development' ? composeWithDevTools(applyMiddleware(...middleware)) : applyMiddleware(...middleware)
  );
}
