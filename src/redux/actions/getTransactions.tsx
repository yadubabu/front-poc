import axios, { AxiosResponse } from "axios";
import { getTransApi } from "../apis";
import { Types } from "../enums/constants";
import { Dispatch, AnyAction } from "redux";

export const getTransactions = (email: string) => {
  return async function (dispatch: Dispatch<AnyAction>) {
    const response: AxiosResponse = await axios.get(`${getTransApi}/${email}`);

    dispatch({ type: Types.GET_TRANS, payload: response.data });
  };
};
