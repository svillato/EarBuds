import { combineReducers } from 'redux';
import user from './authReducer';
import data from './dataReducer';

export default combineReducers({
  user, data
});
