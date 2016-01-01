import React, { Component, PropTypes } from 'react';
import Q from 'q';
import $ from 'jquery';
import _ from 'lodash';

import Fade from './Fade';
import Issue from './Issue';
import Loader from './Loader';

import asyncProps from '../containers/asyncProps';

import slug from '../utils/slug';
import config from '../config';

import './Issues.less';

class Issues extends Component {
  static propTypes = {
    issues: PropTypes.arrayOf(PropTypes.shape(Issue.propTypes))
  }
  render() {
    // make the key unique to the set of issues being displayed,
    // so if the list changes the fade effect occurs for issues
    // that already had been rendered
    return (
      <div className="issues">
        {this.props.issues ? (
          <Fade key={this.props.issues.map(issue => issue.id).join('')}>
          {this.props.issues.map(issue => (
            <Issue key={issue.id} {...issue} />
          ))}
          </Fade>
        ) : (
          <div className="loader">
            <Loader />
          </div>
        )}
      </div>
    );
  }
}

export default asyncProps(Issues, props => {
  const issueFilter = issue => (
    // if we're on a single issue page, filter for just that issue
    !props.params.til || slug(issue.title) === props.params.til
  );
  const labelFilter = issue => (
    // if we're on a label page, filter for the issues that have that label
    !props.params.label || issue.labels.find(label => slug(label.name) === props.params.label)
  );

  return Q.resolve($.ajax(`https://api.github.com/repos/${config.repo}/issues`))
    .then(issues => _.sortBy(issues, '-created_at'))
    .then(issues => issues.filter(issueFilter).filter(labelFilter))
    .then(issues => ({ issues }));
});
