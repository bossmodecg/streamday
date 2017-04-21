import _ from 'lodash';

import React from 'react';

import stylePropType from 'react-style-proptype';



export default class DisplayLetterbox extends React.Component {
  render() {
    return (
      <div className={`display-letterbox-${this.props.placement}`} style={this.props.style} />
    )
  }
}

DisplayLetterbox.propTypes = {
  style: stylePropType,
  placement: React.PropTypes.oneOf(['top', 'bottom'])
}
