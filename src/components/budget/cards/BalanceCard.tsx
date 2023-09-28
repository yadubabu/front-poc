import Cards from "./shared/Card";
import { useSelector } from "react-redux";
import { AppState } from "../../../redux/store";

const BalanceCard = () => {
  const availableAmount = useSelector<AppState, number>(
    ({ account }) => account.availableAmount
  );

  return (
    <div>
      <Cards
        val={availableAmount}
        name="setbudget"
        title="Available Balance"
        color="rgb(27, 77, 14)"
      />
    </div>
  );
};

export default BalanceCard;
