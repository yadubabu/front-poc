import Cards from "./shared/Card";
import { useSelector } from "react-redux";
import { AppState } from "../../../redux/store";

const TotalIncomes = () => {
  const totalIncomes = useSelector<AppState, number>(
    ({ account }) => account.totalIncomes
  );
  return (
    <div>
      <Cards
        val={totalIncomes}
        name="totalincomes"
        title="Total Incomes"
        color="rgb(36, 151, 7)"
      />
    </div>
  );
};

export default TotalIncomes;
