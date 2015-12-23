import React, { Component, PropTypes } from 'react';

import Til from './Til';

const Tils = props => (
  <div className="container">
    <div id="til">
      {props.tils ? props.tils.map(til => <Til key={til.id} {...til} />) : null}
    </div>
  </div>
);

Tils.propTypes = {
  tils: PropTypes.arrayOf(React.PropTypes.shape(Til.propTypes))
};

export default Tils;