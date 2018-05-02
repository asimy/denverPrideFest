import React from 'react';
import PropTypes from 'prop-types';
import classNames from './styles.scss';

class Sticky extends React.Component {
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
        foo
      </div>
    );
  }
}

export default Sticky;
