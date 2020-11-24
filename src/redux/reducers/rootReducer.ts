import {combineReducers} from 'redux';
import userReducer from './userReducer';
import LoginReducer from './loginReducer';

const rootReducer = combineReducers({
 users: userReducer, logins: LoginReducer
});

export default rootReducer;