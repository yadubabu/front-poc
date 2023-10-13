import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useDispatch, useSelector } from "react-redux";
import { Auth } from "./dataTypes";
import { userAction } from "./redux/actions/userAction";
import SetBudget from "./components/budget/pages/SetBudget";
import SavingsBudget from "./components/budget/pages/SavingsBudget";
import ExpenseBudget from "./components/budget/pages/ExpenseBudget";
import InvestmentBudget from "./components/budget/pages/InvestmentBudget";
import TransactionsTracker from "./components/transactions/TransactionsTracker";
import TransactionsForm from "./components/transactions/TransactionsForm";
import TransactionsHistory from "./components/transactions/TransactionsHistory";
import FAQ from "./pages/FAQ";
import { authService } from "./redux/services/allServices";
import { Dispatch } from "redux";
import Earnings from "./components/budget/pages/Earnings";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GetMessages from "./components/transactions/Messages";

const App = () => {
  const dispatch: Dispatch<any> = useDispatch();
  useEffect(() => {
    dispatch(authService());
  });
  const auth = useSelector<Auth>((state) => state.auth);
  useEffect(() => {
    if (auth) {
      dispatch(userAction());
    }
  });

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/budget/setbudget" element={<SetBudget />} />
          <Route path="/budget/totalsavings" element={<SavingsBudget />} />
          <Route path="/budget/totalincomes" element={<Earnings />} />

          <Route path="/budget/totalexpense" element={<ExpenseBudget />} />
          <Route
            path="/budget/totalinvestment"
            element={<InvestmentBudget />}
          />
          <Route path="/messages" element={<GetMessages />} />
          <Route
            path="/transactions/tracker"
            element={<TransactionsTracker />}
          />
          <Route path="/transactions/add" element={<TransactionsForm />} />
          <Route path="/transactions/edit" element={<TransactionsHistory />} />
        </Routes>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        theme="dark"
      />
    </div>
  );
};

export default App;
