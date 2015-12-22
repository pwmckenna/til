$(document).ready(function() {
  function sequence (items, callback) {
    return _.reduce(items, function (promise, item) {
      return promise.then(function () {
        return callback(item);
      })
    }, Q.resolve());
  };
  Q.fcall(function () {
    return $.get('templates/tid.handlebars');
  }).then(function (resp) {
    var repo = 'pwmckenna/til';

    var template = Handlebars.compile(resp);
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
        var id = 'til-' + til.id;
        $('#til').append(template({
          id: id,
          title: til.title,
          body: marked(til.body),
          date: moment(til.created_at).format('MMMM Do YYYY'),
          labels: til.labels,
          user: til.user,
          issue: til.html_url,
          href: encodeURIComponent(window.location.origin + window.location.pathname + window.location.search + '#' + id)
        }));
      });
    }).finally(function () {
      if (window.location.hash) {
        window.location = window.location.hash;
      }
    });
  });
});