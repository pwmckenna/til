import React from 'react';

export default (Component, filter) => props => <Component {...filter(props)} />;
