import { getAccountApi } from "../apis";
import { Types } from "../enums/constants";
import { Dispatch, AnyAction } from "redux";
import axios, { AxiosError, AxiosResponse } from "axios";

export const getAccount = (email: string) => {
  return async function (dispatch: Dispatch<AnyAction>) {
    await axios
      .get(`${getAccountApi}/${email}`)
      .then((res: AxiosResponse) => {
        dispatch({ type: Types.GET_ACCOUNT, payload: res.data });
      })
      .catch((err: AxiosError) => console.log(err));
  };
};
