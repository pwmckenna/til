import React, { Component, PropTypes } from 'react';

import Dot from './Dot';

import config from '../config';

import staticProps from '../containers/staticProps';

import './Footer.less';

class Footer extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    repo: PropTypes.string.isRequired,
    twitter: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired
  }
  render() {
    return (
      <div className="footer text-center">
        <h3>
          <img src="vendor/emoji-parser/emoji/evergreen_tree.png" />
          {this.props.name}
          <img src="vendor/emoji-parser/emoji/evergreen_tree.png" />
        </h3>
        <div>
          <a href={`https://github.com/${this.props.repo}/issues`}>
            <i className="fa fa-code-fork" />
          </a>
          <Dot className="dot" />
          <a href={`https://twitter.com/${this.props.twitter}`}>
            <i className="fa fa-twitter" />
          </a>
          <Dot className="dot" />
          <a href={`https://github.com/${this.props.github}`}>
            <i className="fa fa-github" />
          </a>
        </div>
      </div>
    );
  }
}

export default staticProps(Footer, config);
