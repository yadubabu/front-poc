import { Chart, ArcElement, ChartData, ChartOptions, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { Shares } from "../../dataTypes";
import { Tooltip } from "chart.js";
import { DoughnutProps } from "../../dataTypes";
import { DoughnutData } from "../../dataTypes";
import { DoughnutOptions } from "../../dataTypes";
import { FaRupeeSign } from "react-icons/fa";

Chart.register(ArcElement, Tooltip, Legend);

const DoughnutShow = () => {
  const availableAmount = useSelector<AppState, number>(
    (state) => state.account.availableAmount
  );
  const shares = useSelector<AppState, Shares[]>((state) => state.shares);
  const getPercent = () => {
    const res = shares.map((share: Shares) => {
      return share.percent;
    });
    return res;
  };

  const data: DoughnutData = {
    labels: ["Balance", "Incomes", "Savings", "Expense", "Investment"],
    type: "doughnut",
    datasets: [
      {
        data: getPercent(),
        backgroundColor: [
          "rgb(27, 77, 14)",
          "rgb(248, 104, 8)",
          "rgb(155, 05, 186)",

          "rgb(238, 174, 26)",
          "rgb(15, 127, 201)",
        ],
        borderColor: [
          "rgb(27, 77, 14)",
          "rgb(248, 104, 8)",
          "rgb(155, 05, 186)",

          "rgb(238, 174, 26)",
          "rgb(15, 127, 201)",
        ],
        borderWidth: 1,
        borderRadius: 5,
        spacing: 3,
        hoverBackgroundColor: [
          "rgb(27, 77, 14)",
          "rgb(248, 104, 8)",
          "rgb(155, 05, 186)",
          "rgb(238, 174, 26)",
          "rgb(15, 127, 201)",
        ],
      },
    ],
  };

  const options: DoughnutOptions | any = {
    onClick: () => {
      // window.location.href = "/transactions/edit";
    },
    plugins: {
      responsive: true,
    },
    tooltips: {
      enabled: true, // Enable tooltips on hover
    },
  };

  return (
    <div className="flex-col">
      <h5 className="flex text-center m-2 p-1 text-indigo-700 font-bold">
        {" "}
        Available Balance-
        <span className="mt-1 w-4">
          {" "}
          <FaRupeeSign />
        </span>
        {availableAmount}
      </h5>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutShow;
