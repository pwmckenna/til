import React, { Component as ReactComponent } from 'react';

export default fetch => Component => (
  class extends ReactComponent {
    componentDidMount() {
      fetch(this.props).then(props => this.setState(props));
    }
    componentWillReceiveProps(nextProps) {
      fetch(nextProps).then(props => this.setState(props));
    }
    render() {
      return <Component {...this.props} {...this.state} />;
    }
  }
);
