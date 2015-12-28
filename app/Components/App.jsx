import React, { Component } from 'react';
import Q from 'q';
import $ from 'jquery';
import _ from 'lodash';

import Header from './Header';
import Footer from './Footer';
import Issues from './Issues';
import Loader from './Loader';

import config from '../config';

import './App.less';

const parameters = localStorage.githubToken ? `?access_token=${localStorage.githubToken}` : '';

const fetchIssues = () => Q.fcall(() => (
  $.ajax(`https://api.github.com/repos/${config.repo}/issues${parameters}`)
))
.then(issues => _.sortBy(issues, '-created_at'))
.then(issues => Q.all(issues.map(issue => (
  Q.fcall(() => (
    Q.resolve(issue.comments ? $.ajax(`${issue.comments_url}${parameters}`) : [])
  ))
  .then(comments => {
    issue.comments = comments;
    return issue;
  })
))));

const fetchImage = () => Q.fcall(() => (
  $.ajax(`https://api.github.com/users/${config.github}${parameters}`)
)).get('avatar_url');

class App extends Component {
  constructor() {
    super();
    this.state = {
      issues: null
    };
  }
  componentDidMount() {
    Q.all([
      fetchIssues(),
      fetchImage()
    ]).spread((issues, img) => this.setState({ issues, img }));
  }
  render() {
    return (
      <div className="app container">
        <Header title={config.title} img={this.state.img} />
        {this.state.issues ?
            <Issues issues={this.state.issues} /> :
            <div className="loader">
              <Loader />
            </div>
        }
        <Footer />
      </div>
    );
  }
}

export default App;