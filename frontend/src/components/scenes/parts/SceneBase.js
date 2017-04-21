import _ from 'lodash';

import React from 'react';

import { client } from '../../../services';

export default class SceneBase extends React.Component {
  render() {
    const simplestore = client.module("simplestore");
    const lnfSkin = "skin-" + _.get(simplestore.state, ["lnf", "skin"], "default");

    return (
      <div id={this.props.id} className={`scene-base ${lnfSkin}`}>
        { this.props.children }
      </div>
    );
  }
}

SceneBase.propTypes = {
  id: React.PropTypes.string.isRequired,
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.arrayOf(React.PropTypes.element)
  ])
}
