import React from 'react';
import PropTypes from 'prop-types';
import classNames from './styles.scss';

class Button extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    className: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    onClick: PropTypes.func.isRequired,
  };

  static defaultProps = {
    children: undefined,
    className: undefined,
    id: undefined,
    name: '',
  };

  render() {
    const {
      children,
      className,
      id,
      name,
      onClick,
    } = this.props;

    return (
      <button
        className={[
          classNames.wrapper,
          className,
        ].join(' ')}
        id={id || name}
        name={name}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}

export default Button;

