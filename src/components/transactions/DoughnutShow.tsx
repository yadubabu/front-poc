import React, { useEffect, useState } from "react";
import { Chart, ArcElement, ChartData, ChartOptions } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import axios, { AxiosResponse, AxiosError } from "axios";
import { useSelector, useDispatch } from "react-redux";
// import { Account, Objects, Budget, Trans, User } from "../../shared/modals";
// import { apiTrans } from "../../shared/api";
// import { getTrans } from "../../redux/actions";
// import "../pages/style.css";
Chart.register(ArcElement);

interface DoughnutProps {
  options: ChartOptions<"doughnut">;
  data: ChartData<"doughnut">;
}

const DoughnutShow = () => {
  // const [newData, setNewData] = useState<Objects>();
  // const objects: any = useSelector<Objects>((state) => state.objects);
  // const account: any = useSelector<Account>((state) => state.account);
  // const budget: any = useSelector<Budget>((state) => state.budget);
  // const { email } = account;
  // const { totalAmount } = budget;
  // const dispatch = useDispatch();
  // const getTransactions = async () => {
  //   await axios
  //     .get(`${apiTrans}/${email}`)
  //     .then((res: AxiosResponse) => dispatch(getTrans(res.data)))
  //     .catch((err: AxiosError) => console.log(err));
  // };
  // useEffect(() => {
  //   getTransactions();
  // }, []);

  // const getObjects = () => {
  //   const getObj = objects.map((obj: any) => {
  //     return (obj.percent * 100) / 360;
  //   });
  //   setNewData(getObj);
  // };
  // useEffect(() => {
  //   if (objects) {
  //     getObjects();
  //   }
  // }, [objects]);

  const data: any = {
    type: "doughnut",

    datasets: [
      {
        labels: ["availBalPercent", "Savings", "Expense", "Investment"],
        data: [30, 20, 20, 30],
        backgroundColor: [
          "rgb(155, 05, 186,0.7)",
          "rgb(255, 99, 132,0.7)",
          "rgb(54, 162, 235,0.7)",
          "rgb(255, 205, 86,0.7)",
        ],
        borderColor: [
          "rgb(155, 05, 186,1)",
          "rgb(255, 99, 132,1)",
          "rgb(54, 162, 235,1)",
          "rgb(255, 205, 86,1)",
        ],
        borderWidth: 1,
        borderRadius: 10,
        spacing: 3,
        hoverBackgroundColor: [
          "rgb(155, 05, 186,1)",
          "#e62d55",
          "#0793f1",
          "#ecbf4c",
        ],
      },
    ],
  };

  const options: any = {
    onClick: () => {
      window.location.href = `/budget`;
    },
    plugins: {
      responsive: true,
    },
  };

  return (
    <div className="nut">
      {/* Available Balance--{totalAmount} */}
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutShow;
