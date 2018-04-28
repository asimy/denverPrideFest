import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from './styles.scss';

class LabeledCheckbox extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  };

  static defaultProps = {
    className: '',
    label: '',
    name: '',
  };

  render() {
    const {
      className,
      name,
      label,
      onChange,
      value,
    } = this.props;

    return (
      <div className={
        [classNames.wrapper,
          className,
        ].join(' ')}
      >
        <label
          className={classNames.innerWrapper}
          htmlFor={name}
        >
          {/* eslint-disable-next-line react/no-danger */}
          <span className={classNames.label} dangerouslySetInnerHTML={{ __html: label }} />
          <input
            className={classNames.input}
            id={name}
            name={name}
            onChange={onChange}
            type="checkbox"
            value={value}
          />
          <span className={classNames.checkMark} />
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

export default connect(mapStateToProps)(LabeledCheckbox);

