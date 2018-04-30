import initialState from '../constants/initialState';
import actions from '../constants/actions';

export default function UserReducer(state = initialState.eventSignup.contactInfo, action) {
  switch (action.type) {
    case actions.contact.UPDATE_CONTACT:
      return Object.assign({}, state, action.contactInfo);
    default:
      return state;
  }
}
