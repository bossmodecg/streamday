import React from 'react';

export default class TitleBlock extends React.Component {
  render() {
    return (
      <div className="title-block">
        { this.props.title }
      </div>
    );
  }
}

TitleBlock.propTypes = {
  title: React.PropTypes.string.isRequired
}
