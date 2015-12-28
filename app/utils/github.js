import Q from 'q';
import $ from 'jquery';
import _ from 'lodash';

import config from '../config';

const parameters = localStorage.githubToken ? `?access_token=${localStorage.githubToken}` : '';

const fetchImage = () => Q.fcall(() => (
  $.ajax(`https://api.github.com/users/${config.github}${parameters}`)
)).get('avatar_url');

const fetchIssues = () => Q.fcall(() => (
  $.ajax(`https://api.github.com/repos/${config.repo}/issues${parameters}`)
))
.then(issues => _.sortBy(issues, '-created_at'))
.then(issues => Q.all(issues.map(issue => (
  Q.fcall(() => (
    Q.resolve(issue.comments ? $.ajax(`${issue.comments_url}${parameters}`) : [])
  ))
  .then(comments => {
    issue.comments = comments;
    return issue;
  })
))));

export default {
  fetchImage,
  fetchIssues
};
