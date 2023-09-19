import { Types } from "../enums/constants";

export const authAction = (auth: boolean) => {
  return {
    type: Types.SET_AUTH,
    payload: auth,
  };
};
