import React from 'react';

export default class PrimaryPanel extends React.Component {
  render() {
    return (
      <div className="primary-panel">
        { this.props.children }
      </div>
    );
  }
}

PrimaryPanel.propTypes = {
  children: React.PropTypes.element
}
