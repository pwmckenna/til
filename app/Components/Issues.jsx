import React, { PropTypes } from 'react';

import Issue from './Issue';

import './Issues.less';

const Issues = props => (
  <ul className="issues">
    {props.issues.map(issue => (
      <Issue key={issue.id} {...issue} />
    ))}
  </ul>
);

Issues.propTypes = {
  issues: PropTypes.arrayOf(PropTypes.shape(Issue.propTypes))
};

export default Issues;
