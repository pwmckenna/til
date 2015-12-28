import React, { Component, PropTypes } from 'react';

import MediaQuery from 'react-responsive';

import tweet from '../utils/tweet';

import './Title.less';

class Title extends Component {
  handleShare(e) {
    e.preventDefault();
    tweet(this.props.url, this.props.title);
  }
  render() {
    const anchor = (
      <a
        href={this.props.url}
        className="header-link"
      >
        <i className="fa fa-link"></i>
      </a>
    );
    const twitter = (
      <a
        target="_blank"
        className="header-link"
        onClick={this.handleShare.bind(this)}
        href={`https://twitter.com/share?url=${this.props.url}`}
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

Title.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Title;
