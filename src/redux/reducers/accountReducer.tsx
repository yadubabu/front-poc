import { Types } from "../enums/constants";
import { Account } from "../../dataTypes";

const initialValue = {
  _id: "",
  email: "",
  availableAmount: 0,
  totalSavings: 0,
  totalExpense: 0,
  totalInvestments: 0,
};

export type AccountAction = {
  type: string;
  payload: Account;
};
const accountReducer = (state = initialValue, action: AccountAction) => {
  if (action.type === Types.GET_ACCOUNT) {
    return action.payload;
  } else {
    return state;
  }
};
export default accountReducer;
