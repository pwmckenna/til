import React, { Component } from 'react';
import Q from 'q';
import $ from 'jquery';
import _ from 'lodash';

import Header from './Header';
import Footer from './Footer';
import Til from './Til';

import config from '../config';

import './App.less';

const fetch = () => Q.fcall(function fetchIssues() {
  return $.ajax('https://api.github.com/repos/' + config.repo + '/issues');
}).then(tils => _.sortBy(tils, '-created_at'));

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      tils: null
    };
  }
  componentDidMount() {
    fetch().then(tils => this.setState({ tils }));
  }
  render() {
    return (
      <div className="app">
        <Header />
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
