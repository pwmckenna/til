import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import { createHashHistory } from 'history';
import $ from 'jquery';
import Q from 'q';
import _ from 'lodash';

import Layout from './Components/Layout';
import Issues from './Components/Issues';

import asyncProps from './containers/asyncProps';

import slug from './utils/slug';
import config from './config';

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

const fetchIssues = () => Q.resolve($.ajax(`https://api.github.com/repos/${config.repo}/issues`));
const sortIssues = issues => _.sortBy(issues, '-created_at');

const LabelIssuesPage = asyncProps(Issues, props => {
  const labelFilter = issues => issues.filter(issue => (
    issue.labels.find(label => slug(label.name) === props.params.label)
  ));

  return fetchIssues()
    .then(sortIssues)
    .then(labelFilter)
    .then(issues => ({ issues }));
});

const IssuePage = asyncProps(Issues, props => {
  const issueFilter = issues => issues.filter(issue => (
    // if we're on a single issue page, filter for just that issue
    slug(issue.title) === props.params.til
  ));
  return fetchIssues()
    .then(issueFilter)
    .then(issues => ({ issues }));
});

const IssuesPage = asyncProps(Issues, () => {
  return fetchIssues()
    .then(sortIssues)
    .then(issues => ({ issues }));
});

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
        component={IssuesPage}
        onEnter={onEnter}
      />
      <Route
        path="til/:til"
        component={IssuePage}
        onEnter={onEnter}
      />
      <Route
        path="label/:label"
        component={LabelIssuesPage}
        onEnter={onEnter}
      />
    </Route>
  </Router>
), document.getElementById('main'));
