import { Types } from "../enums/constants";
import { Trans } from "../../dataTypes";
const initialValue: Trans[] = [
  {
    _id: "",
    email: "",
    name: "",
    type: "",
    amount: 0,
    transdate: new Date(),
  },
];

export type TransAction = {
  type: string;
  payload: Trans[];
};
const transReducer = (transState = initialValue, action: TransAction) => {
  console.log(action.payload);

  if (action.type === Types.GET_TRANS) {
    return [...action.payload];
  } else {
    return transState;
  }
};

export default transReducer;
