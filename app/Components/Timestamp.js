import React, { Component, PropTypes } from 'react';
import moment from 'moment';

class Timestamp extends Component {
  static propTypes = {
    date: PropTypes.string.isRequired
  }
  render() {
    return (
      <span className="text-muted">
        {moment(this.props.date).format('MMMM Do YYYY')}
      </span>
    );
  }
}

export default Timestamp;
