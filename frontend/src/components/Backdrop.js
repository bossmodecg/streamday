import React from 'react';

import RightSidebar16x9 from './scenes/RightSidebar16x9';
import If from './If';

import { client } from '../services';

export default class Backdrop extends React.Component {
  constructor(props) {
    super(props);

    this._refresh = this._refresh.bind(this);

    client.on("bossmodecg.forceUpdate", () => this.forceUpdate());
  }

  componentWillMount() {
    this._refresh();
  }

  _refresh() {
    this.forceUpdate();
    requestAnimationFrame(() => this._refresh());
  }

  render() {
    return (
      <If condition={ client && client.isPopulated }
          then={
            () => {
              const simplestore = client.module("simplestore");
              const debugConfig = simplestore.state.debug || {};

              return (
                <div id="Backdrop">
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
          }
          else={
            <div>Please wait...</div>
          } />
    )
  }
}
