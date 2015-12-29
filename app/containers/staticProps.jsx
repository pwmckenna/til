import React, { Component as ReactComponent } from 'react';

export default function (Component, props) {
  return class extends ReactComponent {
    render() {
      return <Component {...this.props} {...props} />;
    }
  };
}
