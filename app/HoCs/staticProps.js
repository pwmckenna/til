import React from 'react';

export default staticProps => Component => props => <Component {...props} {...staticProps} />;
