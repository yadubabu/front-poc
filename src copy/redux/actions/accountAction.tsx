import { Types } from "../enums/constants";
import { Account } from "../../dataTypes";

export const getAccount = (account: Account) => {
  return {
    type: Types.GET_ACCOUNT,
    payload: account,
  };
};
