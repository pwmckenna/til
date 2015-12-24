import React, { Component } from 'react';
import Q from 'q';
import $ from 'jquery';
import _ from 'lodash';

import Header from './Header';
import Footer from './Footer';
import Til from './Til';

import config from '../config';

import './App.less';

const fetchIssues = () => Q.fcall(() => (
  $.ajax('https://api.github.com/repos/' + config.repo + '/issues')
))
.then(tils => _.sortBy(tils, '-created_at'))
.then(tils => Q.all(tils.map(til => (
  Q.fcall(() => (
    Q(til.comments ? $.ajax(til.comments_url) : [])
  ))
  .then(comments => {
    til.comments = comments;
    return til;
  })
))))
.tap(console.log.bind(console));

const fetchImage = () => Q.fcall(() => (
  $.ajax('https://api.github.com/users/' + config.github)
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
      <div className="app">
        <Header title={config.title} img={this.state.img} />
        {this.state.tils ?
            this.state.tils.map(til => (
              <Til key={til.id} {...til} />
            )) : null
        }
        <Footer />
      </div>
    );
  }
}
