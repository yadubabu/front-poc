import { Types } from "../enums/constants";
import { userService } from "../../services/userService";

export const userAction = () => {
  return {
    type: Types.SET_USER,
    payload: userService(),
  };
};
