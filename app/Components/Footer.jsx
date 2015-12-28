import React from 'react';

import Dot from './Dot';

import config from '../config';

import './Footer.less';

const Footer = () => (
  <div className="footer text-center">
    <h3>
      <img src="vendor/emoji-parser/emoji/evergreen_tree.png" />
      {config.name}
      <img src="vendor/emoji-parser/emoji/evergreen_tree.png" />
    </h3>
    <div>
      <a href={`https://github.com/${config.repo}/issues`}>
        <i className="fa fa-code-fork" />
      </a>
      <Dot className="dot" />
      <a href={`https://twitter.com/${config.twitter}`}>
        <i className="fa fa-twitter" />
      </a>
      <Dot className="dot" />
      <a href={`https://github.com/${config.github}`}>
        <i className="fa fa-github" />
      </a>
    </div>
  </div>
);

export default Footer;
