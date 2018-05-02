/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PrimaryLayout from '../PrimaryLayout';

import NotFoundPage from '../_Pages/NotFoundPage';
import classNames from './styles.scss';

class App extends React.Component {
  render() {
    return (
      <div className={classNames.wrapper}>
        <div className={classNames.content}>
          <Switch>
            <Redirect exact from="/" to="/signup/userinfo" />
            <Route path="/signup" component={PrimaryLayout} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
