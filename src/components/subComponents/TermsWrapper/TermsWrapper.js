import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import classNames from './styles.scss';

class TermsWrapper extends React.Component {
  static propTypes = {
    terms: PropTypes.string,
  };

  static defaultProps = {
    terms: '',
  };

  render() {
    return (
      <div
        className={classNames.wrapper}
        dangerouslySetInnerHTML={{ __html: this.props.terms }} // eslint-disable-line react/no-danger
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    terms: state.terms,
  };
}

export default connect(mapStateToProps)(TermsWrapper);
