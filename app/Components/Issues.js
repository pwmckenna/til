import React, { Component, PropTypes } from 'react';

import Fade from './Fade';
import Issue from './Issue';
import Loader from './Loader';

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

export default Issues;
