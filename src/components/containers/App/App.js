/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PrimaryLayout from '../PrimaryLayout/index';
import Terms from '../Terms/index';
import NotFoundPage from '../Pages/NotFoundPage/index';
import classNames from './styles.scss';

class App extends React.Component {
  render() {
    return (
      <div className={classNames.wrapper}>
        <div className={classNames.content}>
          <Switch>
            <Redirect exact from="/" to="/signup/userinfo" />
            <Route path="/signup" component={PrimaryLayout} />
            <Route path="/terms" component={Terms} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
