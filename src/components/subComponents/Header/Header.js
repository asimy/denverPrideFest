import React from 'react';
import PropTypes from 'prop-types';
import classNames from './styles.scss';

class Header extends React.Component {
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
      <div className={
        [classNames.wrapper,
          className,
        ].join(' ')}
      >
        <img
          src="../../../resources/pridfest_logo.png"
          alt="Denver Pride Logo"
          className={classNames.logo}
        />
      </div>
    );
  }
}

export default Header;
