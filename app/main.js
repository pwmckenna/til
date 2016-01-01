import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import { createHashHistory } from 'history';
import $ from 'jquery';

import Layout from './Components/Layout';
import Issues from './Components/Issues';

// setup google analytics
import './utils/ga';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';

// use github auth token for our requests if available
if (localStorage.githubToken) {
  $.ajaxSetup({
    headers: {
      Authorization: `token ${localStorage.githubToken}`
    }
  });
}

// setup routing
const history = createHashHistory({
  queryKey: false
});

const onEnter = () => $('html, body').animate({ scrollTop: 0 }, 'slow');

render((
  <Router history={history}>
    <Route component={Layout}>
      <Route
        path="/"
        component={Issues}
        onEnter={onEnter}
      />
      <Route
        path="til/:til"
        component={Issues}
        onEnter={onEnter}
      />
      <Route
        path="label/:label"
        component={Issues}
        onEnter={onEnter}
      />
    </Route>
  </Router>
), document.getElementById('main'));
