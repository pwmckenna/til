import Q from 'q';

export default function sequence(items, callback) {
  return items.reduce(function sequenceReducer(promise, item) {
    return promise.then(function sequenceThen() {
      return callback(item);
    });
  }, Q.resolve());
}
