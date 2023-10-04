import { Types } from "../enums/constants";
import { Budget } from "../../dataTypes";

export const getBudget = (budget: Budget) => {
  return {
    type: Types.GET_BUDGET,
    payload: budget,
  };
};
