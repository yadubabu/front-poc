import axios from "axios";
import { getbudgetApi, setbudgetApi } from "../apis";
import { Types } from "../enums/constants";
import { Budget } from "../../dataTypes";

export const getBudget = (budget: Budget) => {
  console.log(budget);

  return {
    type: Types.GET_BUDGET,
    payload: budget,
  };
};
