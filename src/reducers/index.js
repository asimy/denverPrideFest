// Set up your root reducer here...
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import step from './StepReducer';
import terms from './TermsReducer';
import user from './UserReducer';
import contact from './ContactReducer';

const rootReducer = combineReducers({
  step,
  terms,
  user,
  contact,
  routing: routerReducer,
});

export default rootReducer;
