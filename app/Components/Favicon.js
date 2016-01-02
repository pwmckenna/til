import { Component, PropTypes } from 'react';

class Favicon extends Component {
  static propTypes = {
    href: PropTypes.string.isRequired
  }
  componentDidMount() {
    this.renderFavicon();
  }
  componentDidUpdate() {
    this.renderFavicon();
  }
  renderFavicon() {
    const head = document.getElementsByTagName('head')[0];
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = this.props.href;

    head.appendChild(link);
  }
  render() {
    return null;
  }
}

export default Favicon;
