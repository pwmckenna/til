import React, { Component } from 'react';
import Q from 'q';

import Header from './Header';
import Footer from './Footer';
import Issues from './Issues';
import Loader from './Loader';

import config from '../config';
import github from '../utils/github';

import './App.less';

class App extends Component {
  constructor() {
    super();
    this.state = {
      issues: null
    };
  }
  componentDidMount() {
    Q.all([
      github.fetchIssues(),
      github.fetchImage()
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
