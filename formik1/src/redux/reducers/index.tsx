import { combineReducers } from "redux";
import { signupReducer } from "../actionTypes/signupReducer";

const rootReducer = combineReducers({
  users: signupReducer,
});

export default rootReducer;
export type State = ReturnType<typeof rootReducer>;
