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
        color="lightgreen"
      />
    </div>
  );
};

export default BalanceCard;
