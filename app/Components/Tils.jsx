import React, { Component } from 'react';

import Til from './Til';

export default class Tils extends Component {
  render() {
    return (
      <div className="container">
        <div id="til">
          {this.props.tils ? this.props.tils.map(til => <Til {...til} />) : null}
        </div>
      </div>
   );
  }
}

Tils.propTypes = {
  tils: React.PropTypes.arrayOf(React.PropTypes.object)
};
