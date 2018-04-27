/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrimaryLayout from '../PrimaryLayout';
import Terms from '../Terms';
import NotFoundPage from '../NotFoundPage';
import classNames from './styles.scss';

class App extends React.Component {
  render() {
    return (
      <div className={classNames.appContainer}>
        <div className={classNames.content}>
          <Switch>
            <Route exact path="/" component={PrimaryLayout} />
            <Route exact path="/Terms" component={Terms} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
