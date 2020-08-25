import React from 'react';
import ReactDOM from 'react-dom';

import get from 'lodash/get';

import App, { User } from './App';

const userDataEl = document.getElementById('user-data');

var userData: User[] = userDataEl ? JSON.parse(get(userDataEl, 'dataset.users', '[]')) : [];

ReactDOM.render(<App rows={userData} locale="da" rowsPerPage={5} />, document.getElementById('root'));
