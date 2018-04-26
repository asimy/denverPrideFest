// Set up your root reducer here...
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import Terms from './TermsReducer';

const rootReducer = combineReducers({
  Terms,
  routing: routerReducer,
});

export default rootReducer;
