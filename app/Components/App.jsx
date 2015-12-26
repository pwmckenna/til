import React, { Component } from 'react';
import Q from 'q';
import $ from 'jquery';
import _ from 'lodash';

import Header from './Header';
import Footer from './Footer';
import Tils from './Tils';
import Loader from './Loader';

import config from '../config';

import './App.less';

const fetchIssues = () => Q.fcall(() => (
  $.ajax(`https://api.github.com/repos/${config.repo}/issues?access_token=${localStorage.githubToken}`)
))
.then(tils => _.sortBy(tils, '-created_at'))
.then(tils => Q.all(tils.map(til => (
  Q.fcall(() => (
    Q.resolve(til.comments ? $.ajax(`${til.comments_url}?access_token=${localStorage.githubToken}`) : [])
  ))
  .then(comments => {
    til.comments = comments;
    return til;
  })
))));

const fetchImage = () => Q.fcall(() => (
  $.ajax(`https://api.github.com/users/${config.github}?access_token=${localStorage.githubToken}`)
)).get('avatar_url');

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      tils: null
    };
  }
  componentDidMount() {
    Q.all([
      fetchIssues(),
      fetchImage()
    ]).spread((tils, img) => this.setState({ tils, img }));
  }
  render() {
    return (
      <div className="app container">
        <Header title={config.title} img={this.state.img} />
        {this.state.tils ?
            <Tils tils={this.state.tils} /> :
            <div className="loader">
              <Loader />
            </div>
        }
        <Footer />
      </div>
    );
  }
}
