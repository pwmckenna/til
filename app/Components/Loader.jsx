import React from 'react';

import Spinner from 'react-spinkit';

import './Loader.less';

export default () => (
  <Spinner spinnerName="double-bounce" overrideSpinnerClassName="loader" noFadeIn />
);
