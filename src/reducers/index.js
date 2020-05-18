import { combineReducers } from 'redux';
import zipcodeDetails from './zipcodeReducer';
import issueTracker from './issueTrackerReducer';

const rootReducer = combineReducers({
  zipcodeDetails, issueTracker
});

export default rootReducer;