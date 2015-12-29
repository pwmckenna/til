import React from 'react';

export default function (Component, props) {
  return React.createClass({
    render() {
      return <Component {...this.props} {...props} />;
    }
  });
}
