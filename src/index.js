/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader'; // eslint-disable-line import/no-extraneous-dependencies
import configureStore, { history } from './store/configureStore';
import Root from './components/containers/Root';
import './styles/main.scss';

require('./resources/favicon.ico');

const store = configureStore();

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app'), // eslint-disable-line no-undef
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/containers/Root').default; // eslint-disable-line global-require
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('ap,p'), // eslint-disable-line no-undef
    );
  });
}
