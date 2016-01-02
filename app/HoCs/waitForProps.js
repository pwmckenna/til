import React from 'react';

import Loader from '../Components/Loader';

export default requiredProps => Component => props => (
  requiredProps.reduce((success, requiredProp) => (
    success && props.hasOwnProperty(requiredProp)
  ), true) ? (
    <Component {...props} />
  ) : (
    <Loader />
  )
);
