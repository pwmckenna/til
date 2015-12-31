import React, { Component, PropTypes } from 'react';

import Fade from './Fade';
import Issue from './Issue';

import './Issues.less';

class Issues extends Component {
  static propTypes = {
    issues: PropTypes.arrayOf(PropTypes.shape(Issue.propTypes))
  }
  render() {
    // make the key unique to the set of issues being displayed,
    // so if the list changes the fade effect occurs for issues
    // that already had been rendered
    const key = this.props.issues.map(issue => issue.id).join('');
    return (
      <div className="issues">
        <Fade key={key}>
        {this.props.issues.map(issue => (
          <Issue key={issue.id} {...issue} />
        ))}
        </Fade>
      </div>
    );
  }
}

export default Issues;
