import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { Provider } from './context';
import registerServiceWorker from './registerServiceWorker';

const app = (
  <Provider>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </Provider>
);

render(app, document.getElementById('root'));
registerServiceWorker();
