import React, { Component } from 'react';
import Q from 'q';

import Header from './Header';
import Footer from './Footer';
import Tils from './Tils';

import config from '../config';

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
      <div>
        <Header />
        <Tils tils={this.state.tils}/>
        <Footer />
      </div>
    );
  }
}
