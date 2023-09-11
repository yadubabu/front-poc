import axios, { AxiosResponse, AxiosError } from "axios";
import { getbudgetApi } from "../apis";
import { Types } from "../enums/constants";
import { Dispatch, AnyAction } from "redux";

export const getBudget = (email: string) => {
  return async function (dispatch: Dispatch<AnyAction>) {
    await axios
      .get(`${getbudgetApi}/${email}`)
      .then((res: AxiosResponse) => {
        dispatch({ type: Types.GET_BUDGET, payload: res.data });
      })
      .catch((err: AxiosError) => console.log(err));
  };
};
