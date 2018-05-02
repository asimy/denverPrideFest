import React from 'react';
import PropTypes from 'prop-types';
import classNames from './styles.scss';

const wiggleRoom = 30;

class Sticky extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  constructor(props) {
    super(props);

    this.state = {
      hideSelf: false,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    // eslint-disable-next-line no-undef
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    // eslint-disable-next-line no-undef
    window.removeEventListener('scroll', this.handleScroll);
  }
  // eslint-disable-next-line
  handleScroll() {
    // eslint-disable-line no-undef
    const docHeight = window.document.body.scrollHeight; // eslint-disable-line no-undef
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop; // eslint-disable-line no-undef
    const windowHeight = window.innerHeight; // eslint-disable-line no-undef

    if (docHeight - wiggleRoom < scrollPos + windowHeight) {
      this.setState({ hideSelf: true });
    } else if (this.state.hideSelf) {
      this.setState({ hideSelf: false });
    }
  }

  render() {
    const {
      className,
    } = this.props;
    const {
      hideSelf,
    } = this.state;

    return (
      <div className={
        [classNames.wrapper,
          hideSelf ? classNames.hide : '',
          className,
        ].join(' ')}
      >
        <div className={classNames.message}>
          Keep scrolling...
        </div>
      </div>
    );
  }
}

export default Sticky;
