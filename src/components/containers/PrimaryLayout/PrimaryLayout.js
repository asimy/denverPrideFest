import React from 'react';
import classNames from './styles.scss';
import Header from '../../subComponents/Header/index';
import PrideBar from '../../subComponents/PrideBar/index';
import ContentWrapper from '../ContentWraper/index';

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
