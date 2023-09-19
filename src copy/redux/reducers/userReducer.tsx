import { User } from "../../dataTypes";
import { Types } from "../enums/constants";

const initialValue = {
  msg: "",
  name: "",
  email: "",
};
export type UserAction = {
  type: string;
  payload: User;
};
const userReducer = (state = initialValue, action: UserAction) => {
  if (action.type === Types.SET_USER) {
    return action.payload;
  } else {
    return state;
  }
};
export default userReducer;
