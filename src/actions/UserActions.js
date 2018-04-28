import actions from '../constants/actions';

export default function updateUser(userInfo) {
  return (dispatch) => {
    return dispatch({
      type: actions.user.UPDATE_USER,
      userInfo,
    });
  };
}
