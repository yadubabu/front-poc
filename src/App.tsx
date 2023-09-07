import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "./redux/actions/authAction";
import { Auth } from "./dataTypes";
import { userAction } from "./redux/actions/userAction";
import SetBudget from "./components/budget/pages/SetBudget";
import SavingsBudget from "./components/budget/pages/SavingsBudget";
import ExpenseBudget from "./components/budget/pages/ExpenseBudget";
import InvestmentBudget from "./components/budget/pages/InvestmentBudget";
import Logout from "./pages/Logout";
import TransactionsTracker from "./components/transactions/TransactionsTracker";
import TransactionsForm from "./components/transactions/TransactionsForm";
import TransactionsHistory from "./components/transactions/TransactionsHistory";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getAuth = sessionStorage.getItem("data");
    dispatch(authAction(Boolean(getAuth)));
  }, []);
  const auth = useSelector<Auth>((state) => state.auth);
  useEffect(() => {
    if (auth) {
      dispatch(userAction());
    }
  });
  return (
    <div>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/budget/setbudget" element={<SetBudget />} />
          <Route
            path="/dashboard/budget/savingsbudget"
            element={<SavingsBudget />}
          />
          <Route
            path="/dashboard/budget/expensebudget"
            element={<ExpenseBudget />}
          />
          <Route
            path="/dashboard/budget/investmentbudget"
            element={<InvestmentBudget />}
          />
          <Route
            path="/dashboard/transactions/tracker"
            element={<TransactionsTracker />}
          />
          <Route
            path="/dashboard/transactions/add"
            element={<TransactionsForm />}
          />
          <Route
            path="/dashboard/transactions/edit"
            element={<TransactionsHistory />}
          />

          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
