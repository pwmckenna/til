import React from 'react';

export default (Component, fetch, propTypes) => {
  return React.createClass({
    propTypes: propTypes,
    componentDidMount: function () {
      fetch(this.props).then(props => {
        this.setState(props);
        console.log(this.refs.component);
      });
    },
    render: function () {
      return <Component {...this.props} {...this.state} />;
    }
  });
};