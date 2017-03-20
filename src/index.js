import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers';

import App from './App';
import './index.css';

const initialState = {
  user: {
    name: 'Bishal'
  },
  products: [
    {
      id: 'bio-banana',
      description: 'Bio Bananen'
    },
    {
      id: 'strawberry-banana-smoothie',
      description: 'Erdbeer Bananen Smoothie'
    },
    {
      id: 'hipp-apple-banana',
      description: 'HiPP Äpfel mit Bananen'
    },
    {
      id: 'nescape-espresso',
      description: 'Nescafe Espresso'
    },
    {
      id: 'tergernsee-beer',
      description: 'Tegernsee Bier'
    }
  ],
  basket: []
};
const store = createStore(
  rootReducer,
  initialState,
  // eslint-disable-next-line
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
