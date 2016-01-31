import Q from 'q';

export default (items, callback) => (
  items.reduce((promise, item) => (
    promise.then(() => callback(item))
  ), Q.resolve())
);
