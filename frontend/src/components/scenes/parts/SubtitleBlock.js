import React from 'react';

export default class SubtitleBlock extends React.Component {
  render() {
    return (
      <div className="subtitle-block">
        { this.props.children }
      </div>
    );
  }
}

SubtitleBlock.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.element,
    React.PropTypes.arrayOf(React.PropTypes.element)
  ])
}
