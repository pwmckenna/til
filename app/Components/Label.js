import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import slug from '../utils/slug';

import { className } from './Label.less';

class Label extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }
  render() {
    return (
      <Link
        to={`label/${slug(this.props.name)}`}
        key={this.props.name}
        className={className + ' badge'}
        style={{
          backgroundColor: '#' + this.props.color
        }}
      >
        {this.props.name}
      </Link>
    );
  }
}

export default Label;
