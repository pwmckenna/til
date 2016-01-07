import React, { Component as ReactComponent } from 'react';

class Store {
  constructor() {
    this.state = {};
    this.listeners = [];
  }
  getState() {
    return this.state;
  }
  setState(state) {
    this.state = state;
    this.listeners.forEach(listener => listener());
  }
  listen(listener) {
    this.listeners.push(listener);
  }
  unlisten() {
    this.listeners = [];
  }
}

export default (fetch, propTypes) => Component => (
  class extends ReactComponent {
    static propTypes = propTypes;
    constructor() {
      super();
      this.store = new Store();
      this.store.listen(() => this.setState(this.store.getState()));
    }
    componentDidMount() {
      fetch(this.props).then(props => this.store.setState(props));
    }
    componentWillReceiveProps(nextProps) {
      fetch(nextProps).then(props => this.store.setState(props));
    }
    componentWillUnmount() {
      this.store.unlisten();
    }
    render() {
      return <Component {...this.props} {...this.state} />;
    }
  }
);
