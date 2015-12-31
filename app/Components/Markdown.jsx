import React, { Component, PropTypes } from 'react';
import marked from 'marked';

import emoji from '../utils/emoji';

import './Markdown.less';

marked.setOptions({
  highlight: code => hljs.highlightAuto(code).value
});
const renderer = new marked.Renderer();
renderer.listitem = function formatTaskList(text) {
  if (/^\s*\[[x ]\]\s*/.test(text)) {
    const formatted = text
      .replace(/^\s*\[ \]\s*/, '<input type="checkbox" class="task-list-item-checkbox" disabled> ')
      .replace(/^\s*\[x\]\s*/, '<input type="checkbox" class="task-list-item-checkbox" disabled checked> ');
    return '<li style="list-style: none">' + formatted + '</li>';
  }
  return '<li>' + text + '</li>';
};


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
          __html: emoji(marked(this.props.markdown, { renderer }))
        }}
      />
    );
  }
}

export default Markdown;
