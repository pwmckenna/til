import React, { Component, PropTypes } from 'react';
import $ from 'jquery';

import Comment from './Comment';

import asyncProps from '../containers/asyncProps';

import './Comments.less';

class Comments extends Component {
  static propTypes = {
    comments_url: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape(Comment.propTypes)),
    html_url: PropTypes.string.isRequired
  }
  render() {
    return (
      <div className="comments">
        {this.props.comments ?
          this.props.comments.map(comment => <Comment key={comment.id} {...comment} />) :
          null
        }
        <div className="add-comment text-center">
          <a href={this.props.html_url}>
            <i className="fa fa-comment" />
          </a>
        </div>
      </div>
    );
  }
}

export default asyncProps(Comments, props => (
  $.ajax(props.comments_url).then(comments => ({ comments }))
));
