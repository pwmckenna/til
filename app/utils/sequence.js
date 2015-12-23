import Q from 'q';

export default (items, callback) => (
  items.reduce(function sequenceReducer(promise, item) {
    return promise.then(function sequenceThen() {
      return callback(item);
    });
  }, Q.resolve());
)
