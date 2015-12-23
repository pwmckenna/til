import React, { Component } from 'react';
import Q from 'q';

import Header from './Header';
import Footer from './Footer';
import Tils from './Tils';

import markdown from '../utils/markdown';
import emoji from '../utils/emoji';
import slug from '../utils/slug';
import config from '../config';

const fetch = () => {
  return Q.fcall(function fetchIssues() {
    return $.ajax('https://api.github.com/repos/' + config.repo + '/issues');
  }).then(function serializeIssues(tils) {
    const sortedTils = _.sortBy(tils, '-created_at');
    return sortedTils.map(function serializeIssue(til) {
      const anchor = 'til-' + slug(til.title);
      const href = window.location.origin + window.location.pathname + window.location.search + '#' + anchor;
      return {
        anchor,
        title: til.title,
        body: emoji(markdown(til.body)),
        date: moment(til.created_at).format('MMMM Do YYYY'),
        labels: til.labels,
        user: til.user,
        issue: til.html_url,
        href: encodeURIComponent(href)
      };
    });
  }).finally(function scrollToAnchor() {
    if (window.location.hash) {
      window.location = window.location.hash;
    }
  });
};

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
