import React, { Component, PropTypes } from 'react';

import moment from 'moment';

import Label from './Label';
import Comments from './Comments';
import Markdown from './Markdown';
import Dot from './Dot';

import slug from '../utils/slug';
import tweet from '../utils/tweet';

import './Til.less';

export default class Til extends Component {
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
  handleShare(e) {
    e.preventDefault();
    tweet(this.getHref(), this.props.title);
  }
  render() {
    return (
      <li id={this.getAnchor()} className="til">
        <div className="til-header">
          <div className="text-center">
            <h1>
              <a
                href={'#' + this.getAnchor()}
                className="header-link"
              >
                <i className="fa fa-link"></i>
              </a>
              {this.props.title}

              <a
                target="_blank"
                className="header-link"
                onClick={this.handleShare.bind(this)}
                href={`https://twitter.com/share?url=${this.getHref()}`}
              >
                <i className="fa fa-twitter" />
              </a>
            </h1>
          </div>

          <div className="text-center">
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

          <div className="text-center labels">
            {this.props.labels.map(label => <Label key={label.name} {...label} />)}
          </div>
        </div>

        <Markdown className="til-body" markdown={this.props.body} />

        <Comments
          comments={this.props.comments}
          html_url={this.props.html_url}
        />
      </li>
    );
  }
}

Til.propTypes = {
  body: PropTypes.string.isRequired,
  comments: Comments.propTypes.comments,
  created_at: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired,
  labels: PropTypes.arrayOf(PropTypes.shape(Label.propTypes)).isRequired,
  title: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};
