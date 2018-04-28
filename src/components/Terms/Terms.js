import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Switch, Route } from 'react-router-dom';

import classNames from './styles.scss';

class Terms extends React.Component {
  static propTypes = {
    Terms: PropTypes.string,
  };

  static defaultProps = {
    Terms: '',
  };

  render() {
    return (
      <div
        className={classNames.wrapper}
        dangerouslySetInnerHTML={{ __html: this.props.Terms }} // eslint-disable-line react/no-danger
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    terms: state.terms,
  };
}

export default connect(mapStateToProps)(Terms);
