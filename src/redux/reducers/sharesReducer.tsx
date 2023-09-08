import { Shares } from "../../dataTypes";
import { Types } from "../enums/constants";

const initialValue: Shares[] = [
  {
    type: "",
    color: "",
    percent: 0,
  },
];
export type SharesAction = {
  type: string;
  payload: Shares[];
};
const sharesReducer = (state = initialValue, action: SharesAction) => {
  if (action.type === Types.SET_SHARES) {
    return [...action.payload];
  } else {
    return state;
  }
};
export default sharesReducer;
