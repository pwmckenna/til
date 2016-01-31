import React, { Component, PropTypes } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

import emoji from '../utils/emoji';
import shortcode from '../utils/shortcode';

import { className } from './Markdown.less';

marked.setOptions({
  highlight: (code, language) => hljs.highlightAuto(code, [language]).value
});
const checkbox = checked => renderToStaticMarkup(
  <input
    type="checkbox"
    className="task-list-item-checkbox"
    disabled
    checked={checked}
  />
);
const renderer = new marked.Renderer();
renderer.listitem = function formatTaskList(text) {
  if (/^\s*\[[x ]\]\s*/.test(text)) {
    const formatted = text
      .replace(/^\s*\[ \]\s*/, checkbox(false))
      .replace(/^\s*\[x\]\s*/, checkbox(true));
    return `<li style="list-style: none">${formatted}</li>`;
  }
  return `<li>${text}</li>`;
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
          __html: emoji(shortcode(marked(this.props.markdown, { renderer })))
        }}
      />
    );
  }
}

export default Markdown;
