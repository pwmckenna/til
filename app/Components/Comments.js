import React, { Component, PropTypes } from 'react';
import $ from 'jquery';

import Comment from './Comment';

import promiseProps from '../HoCs/promiseProps';

import { className } from './Comments.less';

class Comments extends Component {
  static propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape(Comment.propTypes))
  }
  render() {
    return (
      <div className={className}>
        {this.props.comments ?
          this.props.comments.map(comment => <Comment key={comment.id} {...comment} />) :
          null
        }
      </div>
    );
  }
}

const promiseCommentsProps = promiseProps(props => (
  $.ajax(props.comments_url).then(comments => ({ comments }))
), {
  comments_url: PropTypes.string.isRequired
});

export default promiseCommentsProps(Comments);
