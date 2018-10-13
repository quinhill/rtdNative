import { combineReducers } from 'redux';
import hasErrored from './hasErroredReducer';
import isLoading from './isLoadingReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  isLoading,
  hasErrored,
  user
});

export default rootReducer;