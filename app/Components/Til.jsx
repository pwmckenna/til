import React, { Component } from 'react';

import tweet from '../utils/tweet';

export default class Til extends Component {
  handleShare() {
    tweet(this.props.href, 'TIL ' + this.props.title);
  }
  render() {
    return (
      <div id="{{anchor}}" className="til">
        <div className="til-header">
          <div className="row text-center">
            <h1>
              <a href="#{anchor}" className="header-link">
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
              <a className="pull-right" href="{{user.html_url}}">
                <span className="text-muted">{this.props.user.login}</span>
              </a>
            </div>
            <div className="col-xs-2">
              &nbsp; &nbsp; &#8226; &nbsp; &nbsp;
            </div>
            <div className="col-xs-5">
              <a className="pull-left" href="{{issue}}">
                <span className="text-muted">{this.props.date}</span>
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
          <div className="row" dangerouslySetInnerHTML={{ __html: this.props.body }} />
        </div>

        <div className="til-footer">
          <div className="row text-center">
            <a target="_blank" className="share" onClick={this.handleShare.bind(this)} href="https://twitter.com/share?url={this.props.href}">
              <img src="img/twitter.png" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

Til.propTypes = {
  date: React.PropTypes.string.isRequired,
  href: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  user: React.PropTypes.object.isRequired,
  labels: React.PropTypes.array.isRequired,
  body: React.PropTypes.string.isRequired
};
