import React from 'react';

import LetterboxAnimator from './LetterboxAnimator';

export default class DisplayWindow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      letterboxStyle: { backgroundColor: "#0000ff" }
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ letterboxStyle: { backgroundColor: "#ff0000" }});
    }, 5000);
  }

  render() {
    return (
      <div className={`display-window-${this.props.side}`}>
        { this.props.showLetterboxes ? <LetterboxAnimator placement="top" style={this.state.letterboxStyle} /> : null }
        { this.props.showLetterboxes ? <LetterboxAnimator placement="bottom" style={this.state.letterboxStyle} /> : null }
      </div>
    )
  }
}

DisplayWindow.propTypes = {
  side: React.PropTypes.oneOf(['left', 'right']),
  showLetterboxes: React.PropTypes.bool
}
