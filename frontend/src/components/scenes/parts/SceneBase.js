import React from 'react';

import './SceneBase.css';

export default class SceneBase extends React.Component {
  render() {
    return (
      <div id={this.props.id} className="scene-base">
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
