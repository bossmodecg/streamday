import React from 'react';

export default class SubtitleBlock extends React.Component {
  render() {
    return (
      <div className="subtitle-block">
        { this.props.subTitle }
      </div>
    );
  }
}

SubtitleBlock.propTypes = {
  subTitle: React.PropTypes.string.isRequired
}
