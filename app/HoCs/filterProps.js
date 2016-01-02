import React from 'react';

export default filter => Component => props => <Component {...filter(props)} />;
