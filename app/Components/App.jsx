import React, { Component } from 'react';
import Q from 'q';

import Header from './Header';
import Footer from './Footer';
import Issues from './Issues';
import Loader from './Loader';

import asyncProps from '../containers/asyncProps';

import slug from '../utils/slug';
import config from '../config';
import github from '../utils/github';

import './App.less';

class App extends Component {
  static propTypes = {
    issues: Issues.propTypes.issues,
    img: Header.propTypes.img
  }
  render() {
    return (
      <div className="app container">
        <Header title={config.title} img={this.props.img} />
        {this.props.issues ?
            <Issues issues={this.props.issues} /> :
            <div className="loader">
              <Loader />
            </div>
        }
        <Footer />
      </div>
    );
  }
}

export default asyncProps(App, App.propTypes, props => {
  const issueFilter = issue => (
    // if we're on a single issue page, filter for just that issue
    !props.params.til || slug(issue.title) === props.params.til
  );
  const labelFilter = issue => (
    // if we're on a label page, filter for the issues that have that label
    !props.params.label || issue.labels.find(label => slug(label.name) === props.params.label)
  );
  const fetchIssues = github.fetchIssues()
    .then(issues => (
      issues.filter(issueFilter).filter(labelFilter)
    ));
  const fetchImage = github.fetchImage();
  return Q.all([
    fetchIssues,
    fetchImage
  ]).spread((issues, img) => ({
    issues,
    img
  }));
}, App.propTypes);
