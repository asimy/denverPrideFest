import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Switch, Route } from 'react-router-dom';

import Step from '../Step';
import LabeledInput from '../LabeledInput';
import LabeledCheckbox from '../LabeledCheckbox';
import updateUser from '../../actions/UserActions';

import classNames from './styles.scss';


class UserInfo extends React.Component {
  static propTypes = {
    // props
    className: PropTypes.string,
    user: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      email: PropTypes.string,
    }).isRequired,
    // actions
    updateUser: PropTypes.func.isRequired,
  };

  static defaultProps = {
    className: '',
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    // console.log({ [e.target.name]: e.target.value });
    this.props.updateUser({ [e.target.name]: e.target.value });
  }


  render() {
    const {
      className,
      user: {
        firstName,
        lastName,
        email,
      },
    } = this.props;

    return (
      <div className={
        [classNames.wrapper,
          className,
        ].join(' ')}
      >
        <Step />
        <LabeledInput
          autoComplete="given-name"
          label="First Name"
          name="firstName"
          inputType="text"
          onChange={this.handleChange}
          value={firstName}
          required
        />
        <LabeledInput
          autoComplete="family-name"
          label="Last Name"
          name="lastName"
          inputType="text"
          onChange={this.handleChange}
          value={lastName}
          required
        />
        <LabeledInput
          autoComplete="email"
          label="Email"
          name="email"
          inputType="email"
          onChange={this.handleChange}
          value={email}
          required
        />
        <LabeledCheckbox
          label="I will be at least 18 years old as of <strong>June 14, 2018</strong>"
          name="isOfAge"
          onChange={this.handleChange}
          value={email}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (userInfo) => { dispatch(updateUser(userInfo)); },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
