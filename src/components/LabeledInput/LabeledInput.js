import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from './styles.scss';


class LabeledInput extends React.Component {
  static propTypes = {
    autoComplete: PropTypes.oneOf([
      'email',
      'family-name',
      'given-name',
    ]),
    className: PropTypes.string,
    name: PropTypes.string,
    inputType: PropTypes.oneOf([
      'text',
      'email',
    ]),
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool,
    value: PropTypes.string.isRequired,
  };

  static defaultProps = {
    autoComplete: 'off',
    className: '',
    label: '',
    name: '',
    inputType: 'text',
    required: false,
  };

  render() {
    const {
      autoComplete,
      className,
      name,
      inputType,
      label,
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
          {label}
          {required ? <span className={classNames.required}>*</span> : null}
          <input
            autoComplete={autoComplete}
            className={classNames.input}
            id={name}
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

function mapStateToProps(state) {
  return {
    steps: state.steps,
  };
}

export default connect(mapStateToProps)(LabeledInput);

