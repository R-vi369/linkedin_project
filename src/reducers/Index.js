import { combineReducers } from "redux";
import userReducer from './userReducer'

const rootReducre= combineReducers({
    userState:userReducer;
});

export default userReducer;