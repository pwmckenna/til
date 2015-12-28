import React, { PropTypes } from 'react';

import Dot from './Dot';

import config from '../config';

import staticProps from '../containers/staticProps';

import './Footer.less';

const Footer = (props) => (
  <div className="footer text-center">
    <h3>
      <img src="vendor/emoji-parser/emoji/evergreen_tree.png" />
      {props.name}
      <img src="vendor/emoji-parser/emoji/evergreen_tree.png" />
    </h3>
    <div>
      <a href={`https://github.com/${props.repo}/issues`}>
        <i className="fa fa-code-fork" />
      </a>
      <Dot className="dot" />
      <a href={`https://twitter.com/${props.twitter}`}>
        <i className="fa fa-twitter" />
      </a>
      <Dot className="dot" />
      <a href={`https://github.com/${props.github}`}>
        <i className="fa fa-github" />
      </a>
    </div>
  </div>
);

Footer.propTypes = {
  name: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired
};

export default staticProps(Footer, {
  name: config.name,
  repo: config.repo,
  twitter: config.twitter,
  github: config.github
});
