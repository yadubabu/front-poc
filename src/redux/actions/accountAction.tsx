import { getAccountApi } from "../apis";
import { Types } from "../enums/constants";
import { Dispatch, AnyAction } from "redux";
import axios, { AxiosResponse } from "axios";

export const getAccount = (email: string) => {
  return async function (dispatch: Dispatch<AnyAction>) {
    const response: AxiosResponse = await axios.get(
      `${getAccountApi}/${email}`
    );

    dispatch({ type: Types.GET_ACCOUNT, payload: response.data });
  };
};
