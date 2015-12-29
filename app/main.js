import React from 'react';
import { render } from 'react-dom';
import App from './Components/App';
import { Router, Route } from 'react-router';
import { createHashHistory } from 'history';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';

import './utils/ga';

const history = createHashHistory({
  queryKey: false
});

render((
  <Router history={history}>
    <Route path="/" component={App}>
      <Route path="til-:til" />
      <Route path="label-:label" />
    </Route>
  </Router>
), document.getElementById('main'));
