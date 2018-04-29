import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Switch, Route } from 'react-router-dom';

import Step from '../../../subComponents/Step/index';
import LabeledInput from '../../../subComponents/LabeledInput/index';
import LabeledCheckbox from '../../../subComponents/LabeledCheckbox/index';
import Button from '../../../subComponents/Button/index';

import updateUser from '../../../../actions/UserActions';

import classNames from './styles.scss';


class UserInfo extends React.Component {
  static propTypes = {
    // props
    className: PropTypes.string,
    user: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      email: PropTypes.string,
      isOfAge: PropTypes.bool,
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
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    if (e.target.type === 'checkbox') {
      this.props.updateUser({ [e.target.name]: e.target.checked });
    } else {
      this.props.updateUser({ [e.target.name]: e.target.value });
    }
  }

  handleClick(e) {
    console.log(e, 'clicked', this);
  }


  render() {
    const {
      className,
      user: {
        firstName,
        lastName,
        email,
        isOfAge,
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
          checked={isOfAge}
        />
        <Button
          onClick={this.handleClick}
        >
          I want to help!
        </Button>
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
