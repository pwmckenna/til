import React, { Component, PropTypes } from 'react';
import { Link, PropTypes as RouterPropTypes } from 'react-router';
import MediaQuery from 'react-responsive';

import Twitter from './Twitter';

import slug from '../utils/slug';

import './Title.less';

class Title extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  }
  static contextTypes = {
    history: RouterPropTypes.history.isRequired
  }
  render() {
    const to = `til/${slug(this.props.title)}`;
    const url = window.location.origin + this.context.history.createHref(to);

    const anchor = (
      <Link
        to={to}
        className="header-link"
      >
        <i className="fa fa-link"></i>
      </Link>
    );
    const title = (
      <Link to={to}>{this.props.title}</Link>
    );
    const twitter = (
      <Twitter
        className="header-link"
        title={this.props.title}
        url={url}
      />
    );
    return (
      <div className="text-center title">
        <MediaQuery query="(min-width: 769px)">
          <h1>
            {anchor}
            {title}
            {twitter}
          </h1>
        </MediaQuery>
        <MediaQuery query="(max-width: 768px)">
          <h1>
            {title}
          </h1>
          {anchor}
          {twitter}
        </MediaQuery>
      </div>
    );
  }
}

export default Title;
