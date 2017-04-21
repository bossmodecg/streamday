import React from 'react';

export default class VerticalRail extends React.Component {
  render() {
    return <div className={`vertical-rail vertical-rail-${this.props.side}`} />
  }
}

VerticalRail.propTypes = {
  side: React.PropTypes.oneOf(['left', 'right'])
};
