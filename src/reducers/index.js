import { combineReducers } from 'redux';
import { message } from '../reducers/message';
import authed from '../reducers/authed';
import doctors from '../reducers/doctors';
import entities from '../reducers/entities';
import environment from '../reducers/environment';
import navigator from '../reducers/navigator';
import settings from '../reducers/settings';
import activeFilters from '../reducers/activeFilters';

const rootReducer = combineReducers({
  authed,
  doctors,
  entities,
  environment,
  activeFilters,
  navigator,
  message,
  settings,
});

export default rootReducer;
