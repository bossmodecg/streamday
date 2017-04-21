import React from 'react';

import SceneBase from './parts/SceneBase';

import DisplayWindow from './parts/DisplayWindow';
import VerticalRail from './parts/VerticalRail';
import Sidebar from './parts/Sidebar';

export default class RightSidebar16x9 extends React.Component {
  render() {
    return (
      <SceneBase id="RIGHT_SIDEBAR_SCENE">
        <DisplayWindow side="left" showLetterboxes={true} />
        <VerticalRail side="right" />
        <Sidebar side="right" />
      </SceneBase>
    );
  }
}
