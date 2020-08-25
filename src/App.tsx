import React, { Component } from 'react';
import DataTable from './DataTable';
import { Provider } from 'react-redux';
import './App.css';
import { User } from './User';
import configureStore from './store';

// in development this will add a log if the component rerender with the same prop values
if (process.env.NODE_ENV === 'development') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  });
}

export interface AppPropsType {
  rows: User[];
  rowsPerPage: number;
  locale: string;
}

class App extends Component<AppPropsType> {
  render() {
    return (
      <Provider store={configureStore()}>
        <div className="container mt-3">
          <DataTable {...this.props} />
        </div>
      </Provider>
    );
  }
}

export default App;
