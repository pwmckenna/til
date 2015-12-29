import React, { Component, PropTypes } from 'react';

import markdown from '../utils/markdown';
import emoji from '../utils/emoji';

import './Markdown.less';

class Markdown extends Component {
  static propTypes = {
    markdown: PropTypes.string.isRequired,
    className: PropTypes.any
  }
  render() {
    return (
      <div
        className={this.props.className + ' markdown'}
        dangerouslySetInnerHTML={{
          __html: emoji(markdown(this.props.markdown))
        }}
      />
    );
  }
}

export default Markdown;
