import React from 'react';
import { render } from 'react-dom';

import App from './App';
import { Provider } from './context';
import registerServiceWorker from './registerServiceWorker';

const app = (
  <Provider>
    <App />
  </Provider>
);

render(app, document.getElementById('root'));
registerServiceWorker();
