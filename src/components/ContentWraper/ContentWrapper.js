import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import BasicInfo from '../BasicInfo';
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
        [classNames.content,
          className,
        ].join(' ')}
      >
        <Switch>
          <Route exact path="/" component={BasicInfo} />
        </Switch>
      </main>
    );
  }
}

export default ContentWrapper;
