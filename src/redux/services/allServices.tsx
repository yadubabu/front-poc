import axios, { AxiosError, AxiosResponse } from "axios";
import { apigetMessages, getAccountApi, getTransApi, getbudgetApi } from "../apis";
import { Dispatch } from "redux";
import { getBudget } from "../actions/budgetActions";
import { getAccount } from "../actions/accountAction";
import { getTransactions } from "../actions/transactionActions";
import { authAction } from "../actions/authAction";
import { getMessageAction } from "../actions/getMessageAction";

export const authService = () => {
  return async (dispatch: Dispatch) => {
    const getAuth = sessionStorage.getItem("data");
    dispatch(authAction(Boolean(getAuth)));
  };
};

export const userService = () => {
  const user = JSON.parse(sessionStorage.getItem("data") || "{}");
  if (user !== "") {
    return user;
  }
};

export const budgetService = (email: string) => {
  return async (dispatch: Dispatch) => {
    await axios
      .get(`${getbudgetApi}/${email}`)
      .then((res: AxiosResponse) => {
        return dispatch(getBudget(res.data));
      })
      .catch((err: AxiosError) => console.log(err));
  };
};

export const messageService = (email: string) => {
  return async (dispatch: Dispatch) => {
    await axios
      .get(`${apigetMessages}/${email}`)
      .then((res: AxiosResponse) => {
         return dispatch(getMessageAction(res.data));
      })
      .catch((err: AxiosError) => console.log(err));
  };
};

export const accountService = (email: string) => {
  return async (dispatch: Dispatch) => {
    await axios
      .get(`${getAccountApi}/${email}`)
      .then((res: AxiosResponse) => {
        return dispatch(getAccount(res.data));
      })
      .catch((err: AxiosError) => console.log(err));
  };
};

export const transactionService = (email: string) => {
  return async (dispatch: Dispatch) => {
    await axios
      .get(`${getTransApi}/${email}`)
      .then((res: AxiosResponse) => {
        return dispatch(getTransactions(res.data));
      })
      .catch((err: AxiosError) => console.log(err));
  };
};
