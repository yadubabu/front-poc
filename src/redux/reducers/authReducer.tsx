import { Types } from "../enums/constants";

const initialValue = {
  auth: false,
};

type Auth = {
  type: string;
  payload: boolean;
};
export type AuthAction = Auth;
const authReducer = (state = initialValue, action: AuthAction) => {
  if (action.type === Types.SET_AUTH) {
    return action.payload;
  } else {
    return state;
  }
};
export default authReducer;
