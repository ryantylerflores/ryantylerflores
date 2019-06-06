import { combineReducers } from 'redux';
import location from './location-reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  location,
  form: formReducer
});

export default rootReducer;