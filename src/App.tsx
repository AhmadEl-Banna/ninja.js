import React, { Component } from 'react';
import DataTable from './DataTable';
import { Provider } from 'react-redux';
import './App.css';
import configureStore from './store';

// in development this will add a log if the component rerender with the same prop values
if (process.env.NODE_ENV === 'development') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  });
}

class App extends Component {
  render() {
    console.log('App render');
    return (
      <Provider store={configureStore()}>
        <div className="container mt-3">
          <DataTable />
        </div>
      </Provider>
    );
  }
}

export default App;
