import template from './templates/tid.handlebars';

$(document).ready(function() {
  function sequence (items, callback) {
    return _.reduce(items, function (promise, item) {
      return promise.then(function () {
        return callback(item);
      })
    }, Q.resolve());
  };
  function emoji (text) {
    return emojiParser(text, 'vendor/emoji-parser/emoji');
  }
  function convertToSlug (text) {
    return text.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'-');
  }
  function tweet (url, text) {
    window.open("http://twitter.com/share?url=" + encodeURIComponent(url) + "&text=" + encodeURIComponent(text) + "&count=none/", 'tweet', 'height=300,width=550,resizable=1');
  }
  Q.fcall(function () {
    var repo = 'pwmckenna/til';

    marked.setOptions({
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      }
    });
    Q.fcall(function () {
      return $.ajax('https://api.github.com/repos/' + repo + '/issues');
    }).then(function (tils) {
      var sortedTils = _.sortBy(tils, '-created_at');
      sortedTils.forEach(function (til) {
        var anchor = 'til-' + convertToSlug(til.title);
        var href = window.location.origin + window.location.pathname + window.location.search + '#' + anchor;
        var element = $(template({
          anchor: anchor,
          title: til.title,
          body: emoji(marked(til.body)),
          date: moment(til.created_at).format('MMMM Do YYYY'),
          labels: til.labels,
          user: til.user,
          issue: til.html_url,
          href: encodeURIComponent(href)
        }));
        element.find('.share').click(function (e) {
          e.preventDefault();
          tweet(href, 'TIL ' + til.title);
        });
        $('#til').append(element);
      });
    }).finally(function () {
      if (window.location.hash) {
        window.location = window.location.hash;
      }
    });
  });
});