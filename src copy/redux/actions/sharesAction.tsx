import { Types } from "../enums/constants";
import { Dispatch, AnyAction } from "redux";
import { Shares } from "../../dataTypes";

export const sharesAction = (shares: Shares[]) => {
  return async function (dispatch: Dispatch<AnyAction>) {
    dispatch({ type: Types.SET_SHARES, payload: shares });
  };
};
