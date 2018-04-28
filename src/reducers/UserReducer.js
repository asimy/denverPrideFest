import initialState from './initialState';
import actions from '../constants/actions';

export default function UserReducer(state = initialState.eventSignup.user, action) {
  switch (action.type) {
    case actions.user.UPDATE_USER:
      return Object.assign({}, state, action.userInfo);
    default:
      return state;
  }
}
