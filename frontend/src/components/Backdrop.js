import React from 'react';

import RightSidebar16x9 from './scenes/RightSidebar16x9';

import If from './If';

export default class Backdrop extends React.Component {
  render() {
    const client = this.props.bossmodecgClient;

    if (client.isPopulated) {
      const simplestore = client.module("simplestore");
      // const obs = client.module("obsstudio");

      const debugConfig = simplestore.state.debug || {};
      // const obsStreamStatus = obs.state.streamStatus || {};

      return (
        <div>
          <RightSidebar16x9 />
          <If condition={ debugConfig.showOverlay }
              then={
                () =>
                  <div id="debugOverlay">
                    <h4>SOCKET INFORMATION</h4>
                    <p>
                      Socket ID: { client.id }<br />
                      Connected: { client.isConnected.toString() }<br />
                      Authenticated: { client.isAuthenticated.toString() }
                    </p>
                    {/*<h4>OBS INFORMATION</h4>
                    <p>
                      Streaming: { !!obsStreamStatus.streaming || "unknown" }<br />
                      Recording: { !!obsStreamStatus.recording || "unknown" }<br />
                      <br />
                      Scene: { obs.state.sceneName || "unknown" }<br />
                      FPS: { obsStreamStatus.fps || "unknown" }<br />
                      bPS: { obsStreamStatus.bytesPerSec  || "unknown" }
                    </p>*/}
                  </div>
              } />
        </div>
      )
    }

    return <div />
  }
}
