import React, { PropTypes } from 'react';

import markdown from '../utils/markdown';
import emoji from '../utils/emoji';

import './Markdown.less';

const Markdown = props => (
  <div
    className={props.className + ' markdown'}
    dangerouslySetInnerHTML={{
      __html: emoji(markdown(props.markdown))
    }}
  />
);

Markdown.propTypes = {
  markdown: PropTypes.string.isRequired,
  className: PropTypes.any
};

export default Markdown;
