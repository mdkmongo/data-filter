import { combineReducers } from 'redux';
import { message } from '../reducers/message';
import authed from '../reducers/authed';
import entities from '../reducers/entities';
import environment from '../reducers/environment';
import navigator from '../reducers/navigator';
import settings from '../reducers/settings';

const rootReducer = combineReducers({
  authed,
  entities,
  environment,
  navigator,
  message,
  settings,
});

export default rootReducer;
