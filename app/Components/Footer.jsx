import React, { Component } from 'react';

import config from '../config';

export default () => (
  <div id="footer" className="container">
    <div className="text-center">
      <h3>
        <img
          style={{
            marginTop: '-6px',
            width: '16px',
            height: '16px'
          }}
          src="vendor/emoji-parser/emoji/evergreen_tree.png"
        />
        Patrick Williams
        <img
          style={{
            marginTop: '-6px',
            width: '16px',
            height: '16px'
          }}
          src="vendor/emoji-parser/emoji/evergreen_tree.png"
        />
      </h3>
      <div>
        <a href={`https://github.com/${config.repo}/issues`}>Source</a>
        &nbsp; &nbsp; &#8226; &nbsp; &nbsp;
        <a href={`https://twitter.com/${config.twitter}`}>Twitter</a>
        &nbsp; &nbsp; &#8226; &nbsp; &nbsp;
        <a href={`https://github.com/${config.github}`}>Github</a>
      </div>
    </div>
  </div>
);