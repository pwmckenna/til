import React, { PropTypes } from 'react';

import './Label.less';

const Label = (props) => (
  <span
    key={props.name}
    className="badge label"
    style={{
      backgroundColor: '#{props.color}'
    }}
  >
    {props.name}
  </span>
);

Label.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Label;
