import { Messages } from "../../dataTypes";
import { Types } from "../enums/constants";

export const getMessageAction = (messages: Messages[]) => {
  return {
    type: Types.GET_MESSAGES,
    payload: messages,
  };
};
