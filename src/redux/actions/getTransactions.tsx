import axios from "axios";
import { getTransApi } from "../apis";
import { Types } from "../enums/constants";
import { Trans } from "../../dataTypes";
import { TransAction } from "../reducers/transReducer";

export const getTransactions = (transactions: Trans[]): TransAction => ({
  type: Types.GET_TRANS,
  payload: transactions,
});
