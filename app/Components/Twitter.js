import React, { Component, PropTypes } from 'react';

import tweet from '../utils/tweet';

class Twitter extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    className: PropTypes.string
  };
  handleShare = e => {
    e.preventDefault();
    tweet(this.props.url, this.props.title);
  };
  render() {
    return (
      <a
        target="_blank"
        className={this.props.className}
        onClick={this.handleShare}
        href={`https://twitter.com/share?url=${this.props.url}`}
      >
        <i className="fa fa-twitter" />
      </a>
    );
  }
}

export default Twitter;
