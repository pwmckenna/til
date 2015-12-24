import React, { Component, PropTypes } from 'react';

import tweet from '../utils/tweet';

import './Twitter.less';

export default class Twitter extends Component {
  handleShare(e) {
    e.preventDefault();
    tweet(this.props.url, this.props.text);
  }
  render() {
    return (
      <a
        target="_blank"
        className="twitter"
        onClick={this.handleShare.bind(this)}
        href={`https://twitter.com/share?url=${this.props.url}`}
      >
        <img src="img/twitter.png" />
      </a>
    );
  }
}

Twitter.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};
