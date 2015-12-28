import React, { PropTypes } from 'react';
import Q from 'q';
import $ from 'jquery';

import Comment from './Comment';
import Loader from './Loader';

import asyncProps from '../containers/asyncProps';

import github from '../utils/github';

import './Comments.less';

const Comments = props => (
  <div className="comments">
    {props.comments ?
      props.comments.map(comment => <Comment key={comment.id} {...comment} />) :
      null
    }
    <div className="add-comment text-center">
      <a href={props.html_url}>
        <i className="fa fa-comment" />
      </a>
    </div>
  </div>
);

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(Comment.propTypes)),
  comments_url: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired
};

export default asyncProps(Comments, props => (
  github.fetchIssueComments({
    comments_url: props.comments_url
  })
  .then(comments => ({ comments }))
));
