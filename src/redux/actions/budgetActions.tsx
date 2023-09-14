import axios, { AxiosResponse, AxiosError } from "axios";
import { getbudgetApi } from "../apis";
import { Types } from "../enums/constants";
import { Dispatch, AnyAction } from "redux";
import { Budget } from "../../dataTypes";

export const getBudget = (budget: Budget) => {
  return {
    type: Types.GET_BUDGET,
    payload: budget,
  };
};
