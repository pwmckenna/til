import React from 'react';

export default (Component, fetch) => {
  return React.createClass({
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