import React from 'react';
import PropTypes from 'prop-types';
import classNames from './styles.scss';

class LabeledCheckbox extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    checked: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    className: undefined,
    id: undefined,
    label: undefined,
    name: undefined,
  };

  render() {
    const {
      className,
      id,
      name,
      label,
      onChange,
      checked,
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
            id={id || name}
            name={name}
            onChange={onChange}
            type="checkbox"
            checked={checked}
          />
          <span className={classNames.checkMark} />
        </label>
      </div>
    );
  }
}

export default LabeledCheckbox;
