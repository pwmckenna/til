import React from 'react';

import Loader from '../Components/Loader';

const hasOwnProperties = (obj, props) => (
  props.reduce((success, prop) => (
    success && obj.hasOwnProperty(prop)
  ), true)
);

export default requiredProps => Component => props => (
  hasOwnProperties(props, requiredProps) ? <Component {...props} /> : <Loader />
);
