// external libs
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// our components
import Step from '../../../subComponents/Step/index';
import LabeledInput from '../../../subComponents/LabeledInput/index';
import Button from '../../../subComponents/Button/index';

// actions
import updateContact from '../../../../actions/ContactActions';
import updateStep from '../../../../actions/StepActions';

// strings
import strings from '../../../../constants/strings';

// styles
import classNames from './styles.scss';


class ContactInfo extends React.Component {
  static propTypes = {
    // props
    className: PropTypes.string,
    contact: PropTypes.shape({
      phone: PropTypes.string,
      address: PropTypes.string,
      emergencyContact: PropTypes.string,
      emergencyPhone: PropTypes.string,
    }).isRequired,
    // actions
    updateContact: PropTypes.func.isRequired,
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
    this.props.updateStep({ current: 2 });
  }

  handleChange(e) {
    if (e.target.type === 'checkbox') {
      this.props.updateContact({ [e.target.name]: e.target.checked });
    } else {
      this.props.updateContact({ [e.target.name]: e.target.value });
    }
  }

  handleClick(e) {
    console.log(e, 'clicked', this);
  }


  render() {
    const {
      className,
      contact: {
        phone,
        address,
        emergencyContact,
        emergencyPhone,
      },
    } = this.props;

    return (
      <div className={
        [classNames.wrapper,
          className,
        ].join(' ')}
      >
        <Step />
        <div className={classNames.moreInfo}>
          <strong>{strings.moreInfo}</strong>
        </div>
        <LabeledInput
          autoComplete="tel"
          label={strings.phone}
          name="phone"
          inputType="tel"
          onChange={this.handleChange}
          subtext={strings.phoneSubtext}
          value={phone}
          required
        />
        <LabeledInput
          autoComplete="street-address"
          label={strings.mailingAddress}
          name="address"
          inputType="text"
          onChange={this.handleChange}
          value={address}
          required
        />
        <LabeledInput
          label={strings.emergencyContact}
          name="emergencyContact"
          inputType="text"
          onChange={this.handleChange}
          subtext={strings.emergencyContactSubtext}
          value={emergencyContact}
          required
        />
        <LabeledInput
          label={strings.emergencyPhone}
          name="emergencyPhone"
          inputType="tel"
          onChange={this.handleChange}
          value={emergencyPhone}
          required
        />
        <Button
          onClick={this.handleClick}
        >
          {strings.contactDone}
        </Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contact: state.contact,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateContact: (contactInfo) => { dispatch(updateContact(contactInfo)); },
    updateStep: (stepInfo) => { dispatch(updateStep(stepInfo)); },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactInfo);
