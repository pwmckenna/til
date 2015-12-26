import React, { PropTypes } from 'react';

import Comment from './Comment';

import './Comments.less';

const Comments = props => (
  <div className="comments">
    {props.comments.map(comment => <Comment key={comment.id} {...comment} />)}
    <div className="add-comment text-center">
      <a href={props.html_url}>
        <i className="fa fa-comment" />
      </a>
    </div>
  </div>
);

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(Comment.propTypes)).isRequired,
  html_url: PropTypes.string.isRequired
};

export default Comments;
