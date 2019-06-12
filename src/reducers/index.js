import { combineReducers } from 'redux';
import location from './location-reducer';
import projects from './projects-reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  location,
  form: formReducer,
  projects
});

export default rootReducer;