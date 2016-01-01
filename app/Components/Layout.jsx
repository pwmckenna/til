import React, { Component, PropTypes } from 'react';

import Header from './Header';
import Footer from './Footer';

import './Layout.less';

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }
  render() {
    return (
      <div className="layout">
        <div className="container">
          <Header />
          {this.props.children}
          <Footer />
        </div>
      </div>
    );
  }
}

export default Layout;
