import React from 'react';

export default class TitleBlock extends React.Component {
  render() {
    return (
      <div className="title-block">
        { this.props.children }
      </div>
    );
  }
}

TitleBlock.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.element,
    React.PropTypes.arrayOf(React.PropTypes.element)
  ])
}
