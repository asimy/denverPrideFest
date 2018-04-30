import initialState from '../constants/initialState';
import actions from '../constants/actions';

export default function StepReducer(state = initialState.eventSignup.steps, action) {
  switch (action.type) {
    case actions.step.UPDATE_STEP:
      return Object.assign({}, state, action.stepInfo);
    default:
      return state;
  }
}
