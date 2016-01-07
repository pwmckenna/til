import React, { Component, PropTypes } from 'react';

import Label from './Label';
import Comments from './Comments';
import Markdown from './Markdown';
import Dot from './Dot';
import Title from './Title';
import Timestamp from './Timestamp';

import { className } from './Issue.less';

class Issue extends Component {
  static propTypes = {
    body: PropTypes.string.isRequired,
    comments: PropTypes.number.isRequired,
    comments_url: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    labels: PropTypes.arrayOf(PropTypes.shape(Label.propTypes)).isRequired,
    title: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired
  };
  render() {
    return (
      <div className={className}>
        <Title title={this.props.title} />

        <div className="text-center info">
          <div className="col-xs-5">
            <a className="pull-right" href={this.props.user.html_url}>
              <span className="text-muted">{this.props.user.login}</span>
            </a>
          </div>
          <div className="col-xs-2 text-center">
            <Dot />
          </div>
          <div className="col-xs-5">
            <a className="pull-left" href={this.props.html_url}>
              <Timestamp date={this.props.created_at} />
            </a>
          </div>
        </div>

        {this.props.labels.length ? (
          <div className="text-center labels">
            {this.props.labels.map(label => <Label key={label.name} {...label} />)}
          </div>
        ) : null}

        <div className="body">
          <Markdown markdown={this.props.body} />
        </div>

        {this.props.comments > 0 ? (
          <Comments
            comments_url={this.props.comments_url}
          />
        ) : null}

        <div className="text-center">
          <a href={this.props.html_url}>
            <i className="fa fa-comment" />
          </a>
        </div>
      </div>
    );
  }
}

export default Issue;
