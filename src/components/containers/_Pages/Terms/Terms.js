// external libs
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// our components
import Step from '../../../subComponents/Step';
import Button from '../../../subComponents/Button';
import TermsWrapper from '../../../subComponents/TermsWrapper';

// actions
import updateUser from '../../../../actions/UserActions';
import updateStep from '../../../../actions/StepActions';

// strings
import strings from '../../../../constants/strings';

// styles
import classNames from './styles.scss';


class Terms extends React.Component {
  static propTypes = {
    // props
    className: PropTypes.string,
    user: PropTypes.shape({
      hasAcceptedTerms: PropTypes.bool,
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
    this.props.updateStep({ current: 3 });
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
        hasAcceptedTerms,
      },
    } = this.props;

    return (
      <div className={
        [classNames.wrapper,
          className,
        ].join(' ')}
      >
        <Step />
        {hasAcceptedTerms}
        <TermsWrapper />
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
    user: state.user,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (userInfo) => { dispatch(updateUser(userInfo)); },
    updateStep: (stepInfo) => { dispatch(updateStep(stepInfo)); },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Terms);
