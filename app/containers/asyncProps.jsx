import React from 'react';

export default (Component, propTypes, fetch) => {
  return React.createClass({
    propTypes,
    componentDidMount() {
      fetch(this.props).then(props => this.setState(props));
    },
    render() {
      return <Component {...this.props} {...this.state} />;
    }
  });
};
