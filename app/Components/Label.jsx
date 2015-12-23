import React, { PropTypes } from 'react';

const Label = (props) => (
  <span
    key={props.name}
    className="badge"
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
