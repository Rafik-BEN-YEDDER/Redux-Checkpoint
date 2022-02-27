import { combineReducers } from "redux";

import taskReducer from "./Reducer";

const rootReducer = combineReducers({
  taskReducer,
});
export default rootReducer;
