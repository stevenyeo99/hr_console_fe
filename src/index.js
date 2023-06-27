// Third Party Library
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

// Application Component
import App from './containers/App';
import * as serviceWorker from './serviceWorkerRegistration';

// Application Redux Dependencies
import store from './store/store';

// Application Styles
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

serviceWorker.register();