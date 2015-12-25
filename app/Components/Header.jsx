import React, { PropTypes } from 'react';

import './Header.less';

const pixel = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

const Header = props => (
  <div className="header">
    {props.img ?
      <img src={props.img} className="img-circle center-block avatar fadein" /> :
      <img src={pixel} className="img-circle center-block avatar" />
    }
    <h3 className="text-center">{props.title}</h3>
  </div>
);

Header.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string.isRequired
};

export default Header;
