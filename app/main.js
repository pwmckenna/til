import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import { createHashHistory } from 'history';
import $ from 'jquery';
import Q from 'q';
import _ from 'lodash';

import Layout from './Components/Layout';
import Issues from './Components/Issues';

import promiseProps from './HoCs/promiseProps';
import filterProps from './HoCs/filterProps';

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

const sortIssues = issues => _.sortBy(issues, '-created_at');

const fetchIssues = () => {
  return Q.resolve($.ajax(`https://api.github.com/repos/${config.repo}/issues`))
    .then(sortIssues)
    .then(issues => ({ issues }));
};

const asyncIssuesProps = promiseProps(fetchIssues);

const filterLabelIssuesProps = filterProps(props => {
  const issues = props.issues && props.issues.filter(issue => (
    issue.labels.find(label => slug(label.name) === props.params.label)
  ));
  return { issues };
});

const filterIssueProps = filterProps(props => {
  const issues = props.issues && props.issues.filter(issue => (
    // if we're on a single issue page, filter for just that issue
    slug(issue.title) === props.params.til
  ));
  return { issues };
});

const IssuesPage = asyncIssuesProps(Issues);
const IssuePage = asyncIssuesProps(filterIssueProps(Issues));
const LabelPage = asyncIssuesProps(filterLabelIssuesProps(Issues));

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
        component={LabelPage}
        onEnter={onEnter}
      />
    </Route>
  </Router>
), document.getElementById('main'));
