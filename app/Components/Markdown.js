import React, { Component, PropTypes } from 'react';
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

import emoji from '../utils/emoji';

import { className } from './Markdown.less';

marked.setOptions({
  highlight: (code, language) => {
    return hljs.highlightAuto(code, [language]).value;
  }
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
    markdown: PropTypes.string.isRequired
  };
  render() {
    return (
      <div
        className={className}
        dangerouslySetInnerHTML={{
          __html: emoji(marked(this.props.markdown, { renderer }))
        }}
      />
    );
  }
}

export default Markdown;
