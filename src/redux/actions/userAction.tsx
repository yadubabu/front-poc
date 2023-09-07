import { Types } from "../enums/constants";

export const userAction = () => {
  const user = JSON.parse(sessionStorage.getItem("data") || "{}");

  return {
    type: Types.SET_USER,
    payload: user,
  };
};
