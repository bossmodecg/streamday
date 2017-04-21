import React from 'react';

import TitleBlock from './TitleBlock';
import SubtitleBlock from './SubtitleBlock';
import PrimaryPanel from './PrimaryPanel';

export default class Sidebar extends React.Component {
  render() {
    return (
      <div className={`sidebar-${this.props.side}`}>
        <TitleBlock>
          <div>
            Extra Life 2017<br />
            SMT Nocturne
          </div>
        </TitleBlock>
        <div className="camera-block" />
        <SubtitleBlock>
          http://bit.ly/abcdef
        </SubtitleBlock>
        <PrimaryPanel />
      </div>
    );
  }
}

Sidebar.propTypes = {
  side: React.PropTypes.oneOf(['left', 'right'])
};
