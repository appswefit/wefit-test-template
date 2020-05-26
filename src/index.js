import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'moment/locale/pt-br';
import 'moment/locale/es';
import 'moment/locale/it';

import './i18n';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import './index.css';
import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';

import store from './redux/store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
