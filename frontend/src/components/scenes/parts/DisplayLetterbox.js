import _ from 'lodash';

import React from 'react';
import stylePropType from 'react-style-proptype';

import { camel } from 'change-case';

import { client } from '../../../services';

export default class DisplayLetterbox extends React.Component {
  render() {
    const simplestore = client.module("simplestore");

    const computedKey = camel(`image ${this.props.placement}`);
    const bgImage = _.get(simplestore.state, [ "lnf", "letterboxes", computedKey]);

    const style =
      bgImage ? { backgroundImage: `url(${bgImage})` } : {};

    return (
      <div className={`display-letterbox display-letterbox-${this.props.placement}`} style={style} />
    )
  }
}

DisplayLetterbox.propTypes = {
  placement: React.PropTypes.oneOf(['top', 'bottom'])
}
