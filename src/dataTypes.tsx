import { ChartDataset, ChartData, ChartOptions } from "chart.js";

export interface Auth {
  auth: boolean;
}
export interface Account {
  email: string;
  availableAmount: number;
  totalIncomes: number;
  totalSavings: number;
  totalExpense: number;
  totalInvestment: number;
}
export interface User {
  msg: string;
  email: string;
  name: string;
}

export interface Budget {
  _id: string;
  email: string;
  totalBudget: number;
  expenseBudget: number;
  investmentBudget: number;
  savingsBudget: number;
}

export interface Trans {
  _id: string;
  email: string;
  name: string;
  type: string;
  amount: number;
  transDate: Date;
}
export interface DoughnutProps {
  options: ChartOptions<"doughnut">;
  data: ChartData<"doughnut">;
}
export interface DoughnutData {
  labels: string[];
  type: string;
  datasets: ChartDataset<"doughnut", number[]>[];
}
export interface DoughnutOptions extends DoughnutProps {
  onClick: () => void;
  plugins: {
    responsive: boolean;
  };
  tooltips: {
    enabled: boolean;
  };
}
export interface Shares {
  type: string;
  color: string;
  percent: number;
}

export interface Messages{
  _id: string;

  email:string,
  message:string
}