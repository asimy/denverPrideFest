import actions from '../constants/actions';

export default function updateStep(stepInfo) {
  return (dispatch) => {
    return dispatch({
      type: actions.step.UPDATE_STEP,
      stepInfo,
    });
  };
}
