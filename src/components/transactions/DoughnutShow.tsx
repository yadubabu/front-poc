import { Chart, ArcElement, ChartData, ChartOptions, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { Shares } from "../../dataTypes";
import { Tooltip } from "chart.js";
import { DoughnutProps } from "../../dataTypes";
import { DoughnutData } from "../../dataTypes";
import { DoughnutOptions } from "../../dataTypes";

Chart.register(ArcElement, Tooltip, Legend);

const DoughnutShow = () => {
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
          "rgba(68, 10, 14, 0.918)",
          "rgb(36, 151, 7)",
          "rgb(155, 05, 186)",
          "rgb(238, 174, 26)",
          "rgb(15, 127, 201)",
        ],
        borderColor: [
          "rgba(68, 10, 14, 0.918)",
          "rgb(36, 151, 7)",
          "rgb(155, 05, 186)",
          "rgb(238, 174, 26)",
          "rgb(15, 127, 201)",
        ],
        borderWidth: 1,
        borderRadius: 5,
        spacing: 3,
        hoverBackgroundColor: [
          "rgba(68, 10, 14, 0.918)",
          "rgb(36, 151, 7)",
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
      <h5 className="text-indigo-700 text-md font-bold p-2 text-center text-xl">
        Transactions Tracker
      </h5>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutShow;
