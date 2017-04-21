import React from 'react';
import ReactDOM from 'react-dom';

import Backdrop from './components/Backdrop';

import './index.css';
import './styles/style.css';

import { init } from './services';

(async () => {
  await init();

  console.log("Initializing React.");
  ReactDOM.render(
    <Backdrop />,
    document.getElementById('root')
  );
})();
