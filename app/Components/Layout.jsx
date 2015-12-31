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
      <div className="layout container">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
