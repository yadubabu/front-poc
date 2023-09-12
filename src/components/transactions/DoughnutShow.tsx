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
        labels: ["Savings", "Expense", "Investment"],
        data: getPercent(),
        backgroundColor: [
          "rgb(255, 99, 132,0.7)",
          "rgb(54, 162, 235,0.7)",
          "rgb(255, 205, 86,0.7)",
        ],
        borderColor: [
          "rgb(255, 99, 132,1)",
          "rgb(54, 162, 235,1)",
          "rgb(255, 205, 86,1)",
        ],
        borderWidth: 1,
        borderRadius: 10,
        spacing: 3,
        hoverBackgroundColor: ["#e62d55", "#0793f1", "#ecbf4c"],
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
    <div className="nut">
      Available Balance--{totalAmount}
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutShow;
