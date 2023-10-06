import { Types } from "../enums/constants";
import { Messages, Trans } from "../../dataTypes";

const initialValue: Messages[] = [
  {
    _id: "",
    email: "",
   message:'',
  },
];

export type MessageAction = {
  type: string;
  payload: Messages[];
};
const messageReducer = (state = initialValue, action: MessageAction) => {

  if (action.type === Types.GET_MESSAGES) {
    return [...action.payload];
  } else {
    return state;
  }
};

export default messageReducer;
