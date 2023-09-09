import axios, { AxiosResponse } from "axios";
import { getbudgetApi } from "../apis";
import { Types } from "../enums/constants";
import { Dispatch, AnyAction } from "redux";

export const getBudget = (email: string) => {
  return async function (dispatch: Dispatch<AnyAction>) {
    const response: AxiosResponse = await axios.get(`${getbudgetApi}/${email}`);

    dispatch({ type: Types.GET_BUDGET, payload: response.data });
  };
};
