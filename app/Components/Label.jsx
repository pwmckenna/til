import React, { Component, PropTypes } from 'react';

import './Label.less';

class Label extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }
  render() {
    return (
      <span
        key={this.props.name}
        className="badge label"
        style={{
          backgroundColor: '#' + this.props.color
        }}
      >
        {this.props.name}
      </span>
    );
  }
}

export default Label;
