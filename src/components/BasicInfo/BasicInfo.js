import React from 'react';
import PropTypes from 'prop-types';
import classNames from './styles.scss';

class BasicInfo extends React.Component {
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
        [classNames.basicInfo,
          className,
        ].join(' ')}
      >
        tada
      </div>
    );
  }
}

export default BasicInfo;
