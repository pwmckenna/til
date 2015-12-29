import React, { Component, PropTypes } from 'react';
import { Link, PropTypes as RouterPropTypes } from 'react-router';
import MediaQuery from 'react-responsive';

import tweet from '../utils/tweet';
import slug from '../utils/slug';

import './Title.less';

class Title extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  }
  static contextTypes = {
    history: RouterPropTypes.history.isRequired
  }
  handleShare(e) {
    e.preventDefault();
    const to = `til-${slug(this.props.title)}`;
    const url = window.location.origin + this.context.history.createHref(to);
    tweet(url, this.props.title);
  }
  render() {
    const to = `til-${slug(this.props.title)}`;
    const anchor = (
      <Link
        to={to}
        className="header-link"
      >
        <i className="fa fa-link"></i>
      </Link>
    );
    const twitter = (
      <a
        target="_blank"
        className="header-link"
        onClick={this.handleShare.bind(this)}
        href={`https://twitter.com/share?url=${window.location.origin + this.context.history.createHref(to)}`}
      >
        <i className="fa fa-twitter" />
      </a>
    );
    return (
      <div className="text-center title">
        <MediaQuery query="(min-width: 768px)">
          <h1>
            {anchor}
            {this.props.title}
            {twitter}
          </h1>
        </MediaQuery>
        <MediaQuery query="(max-width: 768px)">
          <h1>
            {this.props.title}
          </h1>
          {anchor}
          {twitter}
        </MediaQuery>
      </div>
    );
  }
}

export default Title;
