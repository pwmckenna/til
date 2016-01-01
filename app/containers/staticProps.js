import React from 'react';

export default (Component, staticProps) => props => <Component {...props} {...staticProps} />;
