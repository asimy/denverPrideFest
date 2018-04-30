// external libs
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// strings
import strings from '../../../constants/strings';

// styles
import classNames from './styles.scss';

class Step extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    steps: PropTypes.shape({
      current: PropTypes.number,
      max: PropTypes.number,
    }).isRequired,
  };

  static defaultProps = {
    className: '',
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
        {`${strings.step} ${current} ${strings.of} ${max}`}
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

