import petCounter from "./petCounter";
import users from './users';
import { combineReducers } from "redux";

const reducers = combineReducers({
  petCounter,
  users
});

export default reducers;
