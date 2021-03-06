import React from 'react';
import classNames from './styles.scss';
import Header from '../../subComponents/Header';
import PrideBar from '../../subComponents/PrideBar';
import ContentWrapper from '../ContentWraper';

class PrimaryLayout extends React.Component {
  render() {
    return (
      <div className={classNames.wrapper}>
        <Header className={classNames.header} />
        <PrideBar className={classNames.prideBar} />
        <ContentWrapper className={classNames.contentWrapper} />
      </div>
    );
  }
}

export default PrimaryLayout;
