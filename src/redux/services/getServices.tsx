import axios from "axios";
import { getbudgetApi } from "../apis";
import { Budget, User } from "../../dataTypes";

const fetchBudget: (param: Budget) => void = async () => {
  let user: any = JSON.parse(sessionStorage.getItem("data") || "{}");
  console.log(user);
  const response = await axios.get(`${getbudgetApi}/${user.email}`);
  return response.data;
};
export default { fetchBudget };
