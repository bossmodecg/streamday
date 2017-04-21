import _ from 'lodash';
import React from 'react';

import stylePropType from 'react-style-proptype';
import ReactCSSTransitionReplace from 'react-css-transition-replace';

import DisplayLetterbox from './DisplayLetterbox';

import './LetterboxAnimator.css';

export default class LetterboxAnimator extends React.Component {
  constructor(props) {
    super(props);

    this.state = { componentKey: "0" };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ componentKey: (parseInt(this.state.componentKey, 10) + 1).toString() });
  }

  render() {
    return (
      <ReactCSSTransitionReplace transitionName="letterbox-crossfade"
                                transitionEnterTimeout={500} transitionLeaveTimeout={500}>
        <DisplayLetterbox key={this.state.componentKey}
                          placement={this.props.placement}
                          style={this.props.style} />
      </ReactCSSTransitionReplace>
    );
  }
}

LetterboxAnimator.propTypes = {
  placement: React.PropTypes.oneOf(['top', 'bottom']),
  style: stylePropType
};
