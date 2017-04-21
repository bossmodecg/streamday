import React from 'react';

import DisplayLetterbox from './DisplayLetterbox';

export default class DisplayWindow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`display-window-${this.props.side}`}>
        { this.props.showLetterboxes ? <DisplayLetterbox placement="top" /> : null }
        { this.props.showLetterboxes ? <DisplayLetterbox placement="bottom" /> : null }
      </div>
    )
  }
}

DisplayWindow.propTypes = {
  side: React.PropTypes.oneOf(['left', 'right']),
  showLetterboxes: React.PropTypes.bool
}
