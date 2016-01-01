import React, { Component, PropTypes } from 'react';
import moment from 'moment';

import Markdown from './Markdown';

import './Comment.less';

class Comment extends Component {
  static propTypes = {
    body: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    user: PropTypes.shape({
      html_url: PropTypes.string.isRequired,
      login: PropTypes.string.isRequired
    })
  }
  render() {
    return (
      <div className="comment">
        <div className="row">
          <div className="col-sm-2 col-sm-offset-2">
            <div>
              <a href={this.props.user.html_url}>
                <span className="text-muted">{this.props.user.login}</span>
              </a>
            </div>
            <div>
              <a href={this.props.html_url}>
                <span className="text-muted">{moment(this.props.created_at).format('MMMM Do YYYY')}</span>
              </a>
            </div>
          </div>
          <div className="col-sm-6">
            <Markdown markdown={this.props.body} size={12} />
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;
