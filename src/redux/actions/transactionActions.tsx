import axios, { AxiosResponse } from "axios";
import { apiDeleteTrans, getTransApi } from "../apis";
import { Types } from "../enums/constants";
import { Dispatch, AnyAction } from "redux";

export const getTransactions = (email: string) => {
  return async function (dispatch: Dispatch<AnyAction>) {
    const response: AxiosResponse = await axios.get(`${getTransApi}/${email}`);

    dispatch({ type: Types.GET_TRANS, payload: response.data });
  };
};
// export const addTransactions = (id: string) => {
//   return async function (dispatch: Dispatch<AnyAction>) {
//     const response: AxiosResponse = await axios.post(`${apiDeleteTrans}/${id}`);
//     dispatch({ type: Types.ADD_TRANS, payload: response.data });
//   };
// };
// export const deleteTransactions = (id: string) => {
//   return async function (dispatch: Dispatch<AnyAction>) {
//     const response: AxiosResponse = await axios.delete(
//       `${apiDeleteTrans}/${id}`
//     );
//     dispatch({ type: Types.DELETE_TRANS, payload: response.data });
//   };
// };
