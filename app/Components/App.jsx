import React, { Component } from 'react';
import Q from 'q';

import Header from './Header';
import Footer from './Footer';
import Issues from './Issues';
import Loader from './Loader';

import asyncProps from '../containers/asyncProps';

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

export default asyncProps(App, () => (
  Q.all([
    github.fetchIssues(),
    github.fetchImage()
  ]).spread((issues, img) => ({ issues, img }))
));
