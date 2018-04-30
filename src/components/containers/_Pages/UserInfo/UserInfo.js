// external libs
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// our components
import Step from '../../../subComponents/Step/index';
import LabeledInput from '../../../subComponents/LabeledInput/index';
import LabeledCheckbox from '../../../subComponents/LabeledCheckbox/index';
import Button from '../../../subComponents/Button/index';

// actions
import updateUser from '../../../../actions/UserActions';
import updateStep from '../../../../actions/StepActions';

// strings
import strings from '../../../../constants/strings';

// styles
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
    updateStep: PropTypes.func.isRequired,
  };

  static defaultProps = {
    className: '',
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    this.props.updateStep({ current: 1 });
  }

  handleChange(e) {
    if (e.target.type === 'checkbox') {
      this.props.updateUser({ [e.target.name]: e.target.checked });
    } else {
      this.props.updateUser({ [e.target.name]: e.target.value });
    }
  }

  handleClick() {
    /* eslint-disable-next-line react/prop-types */
    this.props.history.push('contactInfo');
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
          label={strings.firstName}
          name="firstName"
          inputType="text"
          onChange={this.handleChange}
          value={firstName}
          required
        />
        <LabeledInput
          autoComplete="family-name"
          label={strings.lastName}
          name="lastName"
          inputType="text"
          onChange={this.handleChange}
          value={lastName}
          required
        />
        <LabeledInput
          autoComplete="email"
          label={strings.email}
          name="email"
          inputType="email"
          onChange={this.handleChange}
          value={email}
          required
        />
        <LabeledCheckbox
          label={`${strings.minAge} <strong>${strings.minAgeDate}</strong>`}
          name="isOfAge"
          onChange={this.handleChange}
          checked={isOfAge}
        />
        <Button
          onClick={this.handleClick}
        >
          {strings.userInfoDone}
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
    updateStep: (stepInfo) => { dispatch(updateStep(stepInfo)); },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
