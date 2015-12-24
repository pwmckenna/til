import React, { PropTypes } from 'react';
import moment from 'moment';

import Markdown from './Markdown';

import './Comment.less';

const Comment = props => (
  <div className="comment">
    <div className="row">
      <div className="col-xs-2 col-xs-offset-2">
        <div>
          <a href={props.user.html_url}>
            <span className="text-muted">{props.user.login}</span>
          </a>
        </div>
        <div>
          <a href={props.html_url}>
            <span className="text-muted">{moment(props.created_at).format('MMMM Do YYYY')}</span>
          </a>
        </div>
      </div>
      <div className="col-xs-6">
        <Markdown markdown={props.body} size={12} />
      </div>
    </div>
  </div>
);

Comment.propTypes = {
  body: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired,
  user: PropTypes.shape({
    html_url: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired
  })
};

export default Comment;
