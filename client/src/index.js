import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(imagesReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();
