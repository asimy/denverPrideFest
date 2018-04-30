import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import BasicInfo from '../_Pages/UserInfo';
import ContactInfo from '../_Pages/ContactInfo';
import classNames from './styles.scss';

class ContentWrapper extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const {
      className,
    } = this.props;

    return (
      <main className={
        [classNames.wrapper,
          className,
        ].join(' ')}
      >
        <Switch>
          <Route path="/signup/userinfo" component={BasicInfo} />
          <Route path="/signup/contactinfo" component={ContactInfo} />
        </Switch>
      </main>
    );
  }
}

export default ContentWrapper;
