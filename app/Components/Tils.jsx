import React, { PropTypes } from 'react';

import Til from './Til';

import './Tils.less';

const Tils = props => (
  <ul className="tils">
    {props.tils.map(til => (
      <Til key={til.id} {...til} />
    ))}
  </ul>
);

Tils.propTypes = {
  tils: PropTypes.arrayOf(PropTypes.shape(Til.propTypes))
};

export default Tils;
