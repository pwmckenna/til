import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import Q from 'q';

import Fade from './Fade';

import asyncProps from '../containers/asyncProps';
import staticProps from '../containers/staticProps';

import config from '../config';

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
            (
              <Fade>
                <img src={this.props.img} className="img-circle center-block avatar" />
              </Fade>
            ) :
            <img src={pixel} className="img-circle center-block avatar" />
          }
          <h3 className="text-center">{this.props.title}</h3>
        </Link>
      </div>
    );
  }
}

export default asyncProps(staticProps(Header, config), () => (
  Q.resolve($.ajax(`https://api.github.com/users/${config.github}`))
    .get('avatar_url')
    .then(img => ({ img }))
));
