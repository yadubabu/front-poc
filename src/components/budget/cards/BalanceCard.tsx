import Cards from "./shared/Card";
import { useSelector } from "react-redux";
import { AppState } from "../../../redux/store";

const BalanceCard = () => {
  const totalAmount = useSelector<AppState, number>(
    ({ budget }) => budget.totalAmount
  );

  return (
    <div>
      <Cards
        val={totalAmount}
        name="setbudget"
        title="Available Balance"
        color="rgb(27, 77, 14)"
      />
    </div>
  );
};

export default BalanceCard;
