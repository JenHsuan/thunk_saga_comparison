import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import axios from 'axios';
import reducers from './reducers';
import { Provider } from 'react-redux';
import store from './store/store'

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'https://rem-rest-api.herokuapp.com/api';

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
