export interface Auth {
  auth: boolean;
}
export interface Account {
  email: string;
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
  totalAmount: number;
  expenseBudget: number;
  investmentBudget: number;
}

export interface Trans {
  _id: string;
  email: string;
  name: string;
  type: string;
  amount: number;
  transdate: Date;
}

export interface Shares {
  type: string;
  color: string;
  percent: number;
}
