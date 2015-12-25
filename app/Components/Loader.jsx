import React from 'react';

import Spinner from 'react-spinkit';

import './Loader.less';

export default () => (
  <Spinner className="loader" spinnerName="double-bounce" overrideSpinnerClassName="spinner" noFadeIn />
);
