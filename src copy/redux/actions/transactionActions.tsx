import { Types } from "../enums/constants";
import { Trans } from "../../dataTypes";

export const getTransactions = (trans: Trans[]) => {
  return {
    type: Types.GET_TRANS,
    payload: trans,
  };
};
