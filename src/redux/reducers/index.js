import { combineReducers } from 'redux';
import user from './user';
import plans from './plans';

const rootReducer = combineReducers({ user, plans });

export default rootReducer;
