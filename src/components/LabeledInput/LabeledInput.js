import React from 'react';
import PropTypes from 'prop-types';
import classNames from './styles.scss';

class LabeledInput extends React.Component {
  static propTypes = {
    autoComplete: PropTypes.oneOf([
      'email',
      'family-name',
      'given-name',
    ]),
    className: PropTypes.string,
    id: PropTypes.string,
    inputType: PropTypes.oneOf([
      'text',
      'email',
    ]),
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool,
    value: PropTypes.string.isRequired,
  };

  static defaultProps = {
    autoComplete: 'off',
    className: undefined,
    id: undefined,
    inputType: 'text',
    label: undefined,
    name: undefined,
    required: false,
  };

  render() {
    const {
      autoComplete,
      className,
      id,
      inputType,
      label,
      name,
      onChange,
      required,
      value,
    } = this.props;

    return (
      <div className={
        [classNames.wrapper,
          className,
        ].join(' ')}
      >
        <label
          className={classNames.label}
          htmlFor={name}
        >
          {/* eslint-disable-next-line react/no-danger */}
          <span dangerouslySetInnerHTML={{ __html: label }} />
          {required ? <span className={classNames.required}>*</span> : null}
          <input
            autoComplete={autoComplete}
            className={classNames.input}
            id={id || name}
            name={name}
            onChange={onChange}
            type={inputType}
            value={value}
          />
        </label>
      </div>
    );
  }
}

export default LabeledInput;

