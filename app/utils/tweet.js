export default (url, text) => {
  window.open(`http://twitter.com/share?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}&count=none/`, 'tweet', 'height=300,width=550,resizable=1');
};
