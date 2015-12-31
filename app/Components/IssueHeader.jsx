import React, { Component, PropTypes } from 'react';
import moment from 'moment';

import Label from './Label';
import Title from './Title';
import Dot from './Dot';

class IssueHeader extends Component {
  static propTypes = {
    created_at: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    labels: PropTypes.arrayOf(PropTypes.shape(Label.propTypes)).isRequired,
    title: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired
  }
  render() {
    return (
      <div className="issue-header">
        <Title title={this.props.title} />

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

        {this.props.labels.length ? (
          <div className="text-center labels">
            {this.props.labels.map(label => <Label key={label.name} {...label} />)}
          </div>
        ) : null}
      </div>
    );
  }
}

export default IssueHeader;
