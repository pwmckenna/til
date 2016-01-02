import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import Label from './Label';
import Timestamp from './Timestamp';

import slug from '../utils/slug';

import './IssueListItem.less';

class Issue extends Component {
  static propTypes = {
    created_at: PropTypes.string.isRequired,
    labels: PropTypes.arrayOf(PropTypes.shape(Label.propTypes)).isRequired,
    title: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired
  }
  render() {
    const to = `til/${slug(this.props.title)}`;
    return (
      <div className="issue-list-item">
        <div className="col-sm-3">
          <Timestamp date={this.props.created_at} />
        </div>
        <div className="col-sm-5">
          <Link
            to={to}
            className="issue-link"
          >
            {this.props.title}
          </Link>
        </div>
        <div className="col-sm-1">
          <span className="text-muted">{this.props.user.login}</span>
        </div>
        <div className="col-sm-3">
          {this.props.labels.length ? (
            <div className="text-center labels pull-right">
              {this.props.labels.map(label => <Label key={label.name} {...label} />)}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Issue;
