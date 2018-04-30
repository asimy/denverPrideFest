import actions from '../constants/actions';

export default function updateContact(contactInfo) {
  return (dispatch) => {
    return dispatch({
      type: actions.contact.UPDATE_CONTACT,
      contactInfo,
    });
  };
}
