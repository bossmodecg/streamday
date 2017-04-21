import React from 'react';

import TitleBlock from './TitleBlock';
import SubtitleBlock from './SubtitleBlock';
import PrimaryPanel from './PrimaryPanel';

import './Sidebar.css';

export default class Sidebar extends React.Component {
  render() {
    return (
      <div className={`sidebar-${this.props.side}`}>
        <TitleBlock title="Test Title" />
        <div className="camera-block" />
        <SubtitleBlock subTitle="http://bit.ly/abcdef" />
        <PrimaryPanel />
      </div>
    );
  }
}

Sidebar.propTypes = {
  side: React.PropTypes.oneOf(['left', 'right'])
};
