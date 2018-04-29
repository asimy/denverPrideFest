import React from 'react';
import PropTypes from 'prop-types';
import classNames from './styles.scss';

class PrideBar extends React.Component {
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
        <div className={classNames.prideBar}>Volunteer @ Pridefest</div>
      </div>
    );
  }
}

export default PrideBar;
