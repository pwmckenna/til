import React, { Component } from 'react';

import markdown from '../utils/markdown';
import emoji from '../utils/emoji';
import slug from '../utils/slug';
import tweet from '../utils/tweet';

export default class Til extends Component {
  componentDidMount() {
    if (window.location.hash === this.getAnchor()) {
      window.location = window.location.hash;
    }
  }
  getAnchor() {
    return 'til-' + slug(this.props.title);
  }
  getHref() {
    return window.location.origin + window.location.pathname + window.location.search + '#' + this.getAnchor();
  }
  handleShare() {
    tweet(this.getHref(), 'TIL ' + this.props.title);
  }
  render() {
    return (
      <div id="{this.getAnchor()}" className="til">
        <div className="til-header">
          <div className="row text-center">
            <h1>
              <a href="#{this.getAnchor()}" className="header-link">
                <small><i className="glyphicon glyphicon-link"></i></small>
              </a>
              {this.props.title}
              <a
                className="header-link"
                style={{
                  opacity: 0
                }}
              >
                <small><i className="glyphicon glyphicon-link"></i></small>
              </a>
            </h1>
          </div>

          <div className="row text-center">
            <div className="col-xs-5">
              <a className="pull-right" href="{this.props.user.html_url}">
                <span className="text-muted">{this.props.user.login}</span>
              </a>
            </div>
            <div className="col-xs-2">
              &nbsp; &nbsp; &#8226; &nbsp; &nbsp;
            </div>
            <div className="col-xs-5">
              <a className="pull-left" href="{this.props.html_url}">
                <span className="text-muted">{moment(this.props.created_at).format('MMMM Do YYYY')}</span>
              </a>
            </div>
          </div>

          <div className="row text-center">
            <div
              style={{
                paddingTop: '15px'
              }}
            >
            {this.props.labels.map(label => (
              <span
                key={label.name}
                className="badge"
                style={{
                  backgroundColor: '#{label.color}'
                }}
              >
                {label.name}
              </span>
            ))}
            </div>
          </div>
        </div>

        <div className="til-body">
          <div className="row" dangerouslySetInnerHTML={{ __html: emoji(markdown(this.props.body)) }} />
        </div>

        <div className="til-footer">
          <div className="row text-center">
            <a target="_blank" className="share" onClick={this.handleShare.bind(this)} href="https://twitter.com/share?url={this.getHref()}">
              <img src="img/twitter.png" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

Til.propTypes = {
  created_at: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  user: React.PropTypes.object.isRequired,
  labels: React.PropTypes.array.isRequired,
  body: React.PropTypes.string.isRequired
};
