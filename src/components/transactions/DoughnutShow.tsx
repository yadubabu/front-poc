import { Chart, ArcElement, ChartData, ChartOptions } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { Shares } from "../../dataTypes";

Chart.register(ArcElement);

interface DoughnutProps {
  options: ChartOptions<"doughnut">;
  data: ChartData<"doughnut">;
}

const DoughnutShow = () => {
  const totalAmount = useSelector<AppState, number>(
    (state) => state.budget.totalAmount
  );
  const shares = useSelector<AppState, Shares[]>((state) => state.shares);
  const getPercent = () => {
    const res = shares.map((share: Shares) => {
      return (share.percent * 100) / 360;
    });
    return res;
  };

  const data = {
    type: "doughnut",

    datasets: [
      {
        labels: ["Balance", "Savings", "Expense", "Investment"],
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

  const options: DoughnutProps | any = {
    onClick: () => {
      window.location.href = `/transactions/edit`;
    },
    plugins: {
      responsive: true,
    },
  };

  return (
    <div className="flex-column">
      <h5 className="text-center m-3"> Available Balance--{totalAmount}</h5>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutShow;
