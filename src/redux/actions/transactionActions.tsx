import axios, { AxiosError, AxiosResponse } from "axios";
import { getTransApi } from "../apis";
import { Types } from "../enums/constants";
import { Dispatch, AnyAction } from "redux";

export const getTransactions = (email: string) => {
  return async function (dispatch: Dispatch<AnyAction>) {
    await axios
      .get(`${getTransApi}/${email}`)
      .then((res: AxiosResponse) => {
        dispatch({ type: Types.GET_TRANS, payload: res.data });
      })
      .catch((err: AxiosError) => console.log(err));
  };
};
