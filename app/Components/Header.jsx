import React, { Component, PropTypes } from 'react';

import './Header.less';

const pixel = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

class Header extends Component {
  static propTypes = {
    img: PropTypes.string,
    title: PropTypes.string.isRequired
  }
  render() {
    return (
      <div className="header">
        {this.props.img ?
          <img src={this.props.img} className="img-circle center-block avatar fadein" /> :
          <img src={pixel} className="img-circle center-block avatar" />
        }
        <h3 className="text-center">{this.props.title}</h3>
      </div>
    );
  }
}

export default Header;
