import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

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
        <Link to="">
          {this.props.img ?
            <img src={this.props.img} className="img-circle center-block avatar fadein" /> :
            <img src={pixel} className="img-circle center-block avatar" />
          }
          <h3 className="text-center">{this.props.title}</h3>
        </Link>
      </div>
    );
  }
}

export default Header;
