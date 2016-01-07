import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './Fade.less';

class Fade extends Component {
  static propTypes = {
    children: React.PropTypes.node
  };
  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName={{
          enter: 'enter',
          enterActive: 'enterActive',
          leave: 'leave',
          leaveActive: 'leaveActive',
          appear: 'appear',
          appearActive: 'appearActive'
        }}
        transitionEnterTimeout={500}
        transitionAppearTimeout={500}
        transitionLeaveTimeout={10}
        transitionAppear
      >
        {this.props.children}
      </ReactCSSTransitionGroup>
    );
  }
}

export default Fade;
