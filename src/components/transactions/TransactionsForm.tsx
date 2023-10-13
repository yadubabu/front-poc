import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { addTransApi } from "../../redux/apis";
import Sidebar from "../Sidebar";
import "./style.css";
import "../../pages/style.css";
import { FieldValues } from "react-hook-form/dist/types";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { apiAddMessages } from "../../redux/apis";
import { Account,Budget } from "../../dataTypes";
import { IoMdArrowRoundBack } from "react-icons/io";
import { NavLink } from "react-router-dom";

const TransactionsForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const {availableAmount,totalExpense,totalInvestment,totalSavings}=useSelector<AppState,Account>(state=>state.account);
  const {totalBudget,expenseBudget,investmentBudget,savingsBudget}=useSelector<AppState,Budget>(state=>state.budget)
  const email = useSelector<AppState, string>((state) => state.user.email);

  const submitTrans = async (data: FieldValues) => {
    const { name, type, amount, transDate } = data;
    const getMessage=()=>{
      if(type==='income'){
        return `Your account is Credited with ${amount}.Available balance is ${availableAmount+parseInt(amount)}`
      }else{
        if(type==='expense'){
          if(totalExpense+parseInt(amount)<expenseBudget ){
            if(totalExpense+parseInt(amount)>(expenseBudget-(expenseBudget*0.05))){

              return `Available Balance after transaction is ${expenseBudget-(totalExpense+parseInt(amount))}. Your limit on Expense is getting ready to overflow.So please keep sufficient balance in your account`;
            }
            else{
              return `Your account is Debited with ${amount}.Available balance is ${availableAmount-amount}`
            }
          }else{
            return 'There is no sufficient balance to spent on EXPENSES';
          } 
        }
        if(type==='savings'){
          if(totalSavings+parseInt(amount)<savingsBudget ){
            if(totalSavings+parseInt(amount)>(savingsBudget-(savingsBudget*0.05))){

              return `Available Balance after transaction is ${savingsBudget-(totalSavings+parseInt(amount))}. Your limit on Savings is getting ready to overflow.So please keep sufficient balance in your account`;
            }
            else{
              return `Your account is Debited with ${amount}.Available balance is ${availableAmount-amount}`
            }
          }else{
            return 'There is no sufficient balance to spent on SAVINGS';
          }
          
        }
        if(type==='investment'){
         
          if(totalInvestment+parseInt(amount)<investmentBudget ){
            if(totalInvestment+parseInt(amount)>(investmentBudget-(investmentBudget*0.05))){

              return `Available Balance after transaction is ${investmentBudget-(totalInvestment+parseInt(amount))}. Your limit on Investment is getting ready to overflow.So please keep sufficient balance in your account`;
            }
            else{
              return `Your account is Debited with ${amount}.Available balance is ${availableAmount-amount}`
            }
          }else{
            return 'There is no sufficient balance to spent on INVESTMENTS';
          } 
    
    }
  }
}
      if (!name || !type || !amount || !transDate) {
        toast.error("All Fields are mandatory");
      } else {
        const res = await axios.post(`${addTransApi}`, {
          email: email,
          name,
          type,
          amount,
          transDate,
        })
          .then(async()=>{
          return await axios.post(`${apiAddMessages}/${email}`,{
            email,
            message:getMessage(),
            msgDate:Date.now()
          });
        })
        .then((res)=>toast.success(res.data,{theme:'light'})).then(()=>reset())
        .catch(err=>console.log(err))
    
      }
   
  };

  return (
    <div className="row bg-indigo-200">
      <div className="w-1/5">
        <Sidebar />
      </div>
      <div className="lg:w-3/4 sm:w-3/5 my-4 m-4 p-4 bg-white rounded-xl flex align-center justify-around ">
          <NavLink to='/dashboard' className='lg:hidden sm:flex sm:w-1/12'><IoMdArrowRoundBack className="m-1 h-9"/></NavLink>
          <form className="flex-col lg:w-2/3 sm:w-2/2 bg-indigo-200 m-4 p-4" onSubmit={handleSubmit(submitTrans)}>
            <p className="text-center h3 text-indigo-700 m-1 p-1 font-bold">
              Add Transactions
            </p>
          <div className="row m-4 align-center justify-center">
            <label className="col-3 m-1 p-1 font-bold text-sm">Name</label>
            <input
              type="text"
              placeholder="Salary,House,Rent,SIP"
              className="col-6 m-1 text-xs border-1 "
              {...register("name")}
            />
          </div>
          <div className="row m-4 align-center justify-center">
            <label className="col-3 m-1 p-1 font-bold text-sm">Type</label>
            <select className="col-6 m-1 border-1" {...register("type")}>
              <option value="Select categoery">Select</option>
              <option value="income">Income</option>
              <option value="investment">Investment</option>
              <option value="expense">Expense</option>
              <option value="savings">Savings</option>
            </select>
          </div>
          <div className="row m-4 align-center justify-center">
            <label className="col-3 m-1 p-1 font-bold text-sm">Amount</label>

            <input
              type="number"
              placeholder="Amount"
              className="col-6 m-1 border-1"
              {...register("amount")}
            />
          </div>
          <div className="row m-4 align-center justify-center">
            <label className="col-3 m-1 p-1 font-bold text-sm">Date</label>

            <input
              type="date"
              {...register("transDate")}
              className="col-6 m-1 border-1"
            />
          </div>
          <div className="row flex justify-center align-center">
            <input
              className="p-2 ml-5 bg-indigo-900 w-auto text-white rounded-full "
              type="submit"
              value="Make Transaction"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TransactionsForm;
