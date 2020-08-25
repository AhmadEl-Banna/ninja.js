import React, { Component } from 'react';
import DataTable from './DataTable';
import './App.css';

// in development this will add a log if the component rerender with the same prop values
if (process.env.NODE_ENV === 'development') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  });
}

export interface User {
  name1: string;
  email: string;
  edit_path: string;
  per_id: number;
}

export interface AppPropsType {
  rows: User[];
  rowsPerPage: number;
  locale: string;
}

class App extends Component<AppPropsType> {
  render() {
    return (
      <div className="container mt-3">
        <DataTable {...this.props} />
      </div>
    );
  }
}

export default App;
