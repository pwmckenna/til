import marked from 'marked';
marked.setOptions({
  highlight: code => hljs.highlightAuto(code).value
});
export default marked;
