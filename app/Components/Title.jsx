import React, { Component, PropTypes } from 'react';

import tweet from '../utils/tweet';

import './Title.less';

export default class Title extends Component {
  handleShare(e) {
    e.preventDefault();
    tweet(this.props.url, this.props.title);
  }
  render() {
    return (
      <div className="text-center title">
        <h1>
          <a
            href={this.props.url}
            className="header-link"
          >
            <i className="fa fa-link"></i>
          </a>
          {this.props.title}

          <a
            target="_blank"
            className="header-link"
            onClick={this.handleShare.bind(this)}
            href={`https://twitter.com/share?url=${this.props.url}`}
          >
            <i className="fa fa-twitter" />
          </a>
        </h1>
      </div>
    );
  }
}

Title.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}