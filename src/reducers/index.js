import { combineReducers } from 'redux';
import { message } from '../reducers/message';
import authed from '../reducers/authed';
import doctors from '../reducers/doctors';
import environment from '../reducers/environment';
import navigator from '../reducers/navigator';
import settings from '../reducers/settings';
import activeFilters from '../reducers/activeFilters';
import filters from '../reducers/filters';
import filterUI from '../reducers/filterUI';
import { location } from '../reducers/location';

const rootReducer = combineReducers({
  authed,
  doctors,
  filters,
  filterUI,
  environment,
  activeFilters,
  navigator,
  location,
  message,
  settings,
});

export default rootReducer;
