import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from './styles.scss';


class Step extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    steps: PropTypes.shape({
      current: PropTypes.number,
      max: PropTypes.number,
    }),
  };

  static defaultProps = {
    className: '',
    steps: {
      current: 1,
      max: 5,
    },
  };

  render() {
    const {
      className,
      steps: {
        current,
        max,
      },
    } = this.props;

    return (
      <div className={
        [classNames.wrapper,
          className,
        ].join(' ')}
      >
        Step {current} of {max}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    steps: state.steps,
  };
}

export default connect(mapStateToProps)(Step);

