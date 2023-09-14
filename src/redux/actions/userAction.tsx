import { Types } from "../enums/constants";
import { userService } from "../services/allServices";

export const userAction = () => {
  return {
    type: Types.SET_USER,
    payload: userService(),
  };
};
