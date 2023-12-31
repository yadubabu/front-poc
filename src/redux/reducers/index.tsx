import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import budgetReducer from "./budgetReducer";
import accountReducer from "./accountReducer";
import transReducer from "./transReducer";
import sharesReducer from "./sharesReducer";
const reducers = combineReducers({
  auth: authReducer,
  user: userReducer,
  budget: budgetReducer,
  account: accountReducer,
  trans: transReducer,
  shares: sharesReducer,
});

export default reducers;
