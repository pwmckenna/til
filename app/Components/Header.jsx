import React from 'react';

import './Header.less';

export default props => (
  <div className="header">
    <img src={props.img} className="img-circle center-block avatar" />
    <h3 className="text-center">{props.title}</h3>
  </div>
);
