import React from 'react';

export default (Component, propTypes, fetch) => {
  return React.createClass({
    propTypes,
    componentDidMount: function () {
      fetch(this.props).then(props => this.setState(props));
    },
    render: function () {
      return <Component {...this.props} {...this.state} />;
    }
  });
};
