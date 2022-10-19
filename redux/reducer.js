import { combineReducers } from "redux";
import todosReducer from "./todos/todoSlice";
import countryReducer from "./todos/countrySlice";

const rootReducer = combineReducers({
  todos: todosReducer,
  country: countryReducer,
});

export default rootReducer;
