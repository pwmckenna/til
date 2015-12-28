import React, { Component, PropTypes } from 'react';

import moment from 'moment';

import Label from './Label';
import Comments from './Comments';
import Markdown from './Markdown';
import Dot from './Dot';
import Title from './Title';

import slug from '../utils/slug';

import './Issue.less';

export default class Issue extends Component {
  componentDidMount() {
    if (window.location.hash === '#' + this.getAnchor()) {
      window.location = window.location.hash;
    }
  }
  getAnchor() {
    return 'til-' + slug(this.props.title);
  }
  getHref() {
    return window.location.origin + window.location.pathname + window.location.search + '#' + this.getAnchor();
  }
  render() {
    return (
      <li id={this.getAnchor()} className="issue">
        <Title title={this.props.title} url={this.getHref()} />

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
              <span className="text-muted">{moment(this.props.created_at).format('MMMM Do YYYY')}</span>
            </a>
          </div>
        </div>

        {this.props.labels.length ? (
          <div className="text-center labels">
            {this.props.labels.map(label => <Label key={label.name} {...label} />)}
          </div>
        ) : null}

        <Markdown className="body" markdown={this.props.body} />

        <Comments
          comments={this.props.comments}
          html_url={this.props.html_url}
        />
      </li>
    );
  }
}

Issue.propTypes = {
  body: PropTypes.string.isRequired,
  comments: Comments.propTypes.comments,
  created_at: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired,
  labels: PropTypes.arrayOf(PropTypes.shape(Label.propTypes)).isRequired,
  title: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};
