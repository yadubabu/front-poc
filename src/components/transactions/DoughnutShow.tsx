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
    labels: ["Balance", "Savings", "Expense", "Investment"],
    type: "doughnut",
    datasets: [
      {
        data: getPercent(),
        backgroundColor: [
          "rgb(27, 77, 14)",
          "rgb(155, 05, 186)",
          "rgb(238, 174, 26)",
          "rgb(15, 127, 201)",
        ],
        borderColor: [
          "rgb(27, 77, 14)",
          "rgb(155, 05, 186)",
          "rgb(238, 174, 26)",
          "rgb(15, 127, 201)",
        ],
        borderWidth: 1,
        borderRadius: 5,
        spacing: 3,
        hoverBackgroundColor: [
          "rgb(27, 77, 14)",
          "rgb(155, 05, 186)",
          "rgb(238, 174, 26)",
          "rgb(15, 127, 201)",
        ],
      },
    ],
  };

  const options: DoughnutOptions | any = {
    onClick: () => {
      window.location.href = "/transactions/edit";
    },
    plugins: {
      responsive: true,
    },
    tooltips: {
      enabled: true, // Enable tooltips on hover
    },
  };

  return (
    <div className="flex-column">
      <h5 className="text-center m-2  text-indigo-700 font-bold">
        {" "}
        Available Balance--{availableAmount}
      </h5>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutShow;
