import marked from 'marked';
marked.setOptions({
  highlight: code => hljs.highlightAuto(code).value
});
const renderer = new marked.Renderer();
renderer.listitem = function listitem(text) {
  if (/^\s*\[[x ]\]\s*/.test(text)) {
    const formatted = text
      .replace(/^\s*\[ \]\s*/, '<input type="checkbox" class="task-list-item-checkbox" disabled> ')
      .replace(/^\s*\[x\]\s*/, '<input type="checkbox" class="task-list-item-checkbox" disabled checked> ');
    return '<li style="list-style: none">' + formatted + '</li>';
  }
  return '<li>' + text + '</li>';
};

export default markdown => marked(markdown, { renderer });
