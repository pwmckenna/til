import React from 'react';

import config from '../config';

import './Footer.less';

export default () => (
  <div className="footer text-center">
    <h3>
      <img src="vendor/emoji-parser/emoji/evergreen_tree.png" />
      Patrick Williams
      <img src="vendor/emoji-parser/emoji/evergreen_tree.png" />
    </h3>
    <div>
      <a href={`https://github.com/${config.repo}/issues`}>Source</a>
      &nbsp; &nbsp; &#8226; &nbsp; &nbsp;
      <a href={`https://twitter.com/${config.twitter}`}>Twitter</a>
      &nbsp; &nbsp; &#8226; &nbsp; &nbsp;
      <a href={`https://github.com/${config.github}`}>Github</a>
    </div>
  </div>
);
