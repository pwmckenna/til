import React, { Component, PropTypes } from 'react';

import Issue from './Issue';

import './Issues.less';

class Issues extends Component {
  static propTypes = {
    issues: PropTypes.arrayOf(PropTypes.shape(Issue.propTypes))
  }
  render() {
    return (
      <div className="issues">
        {this.props.issues.map(issue => (
          <Issue key={issue.id} {...issue} />
        ))}
      </div>
    );
  }
}

export default Issues;
