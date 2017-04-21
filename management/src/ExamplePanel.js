import React from 'react';
import BossmodeCGM from '@bossmodecg/management-react';
import {
  Button
} from 'react-bootstrap';

export default class ExamplePanel extends BossmodeCGM.Components.Widget {
  constructor(props) {
    super(props);

    this._resetClick = this._resetClick.bind(this);
  }

  _resetClick() {
    const client = this.props.bossmodecgClient;
    const example = client.module("example");

    example.post("/reset");
  }

  _renderWidget() {
    const client = this.props.bossmodecgClient;
    const example = client.module("example");

    return (
      <Button onClick={ this._resetClick }>
        Count: { example.state.count }
      </Button>
    );
  }
}
