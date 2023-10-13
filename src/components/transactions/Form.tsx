import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FieldValues } from "react-hook-form";
import { addTransApi, apiAddMessages } from "../../redux/apis";
import axios from "axios";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { toast } from "react-toastify";
import { Account,Budget } from "../../dataTypes";

const Form = () => {
  const { register, handleSubmit, reset } = useForm();
  const email = useSelector<AppState, string>((state) => state.user.email);
  const {availableAmount,totalExpense,totalInvestment,totalSavings}=useSelector<AppState,Account>(state=>state.account);
  const {totalBudget,expenseBudget,investmentBudget,savingsBudget}=useSelector<AppState,Budget>(state=>state.budget)
  
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
            return 'There is no sufficient balance in your account to spent on EXPENSES';
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
    <div className="flex-col align-center justify-center ">
      <h3 className="m-1 p-2 text-center font-bold text-indigo-700 h5">
        Add Transactions
      </h3>
      <form
        onSubmit={handleSubmit(submitTrans)}
        className="space-y-3 mt-4 m-2 align-center justify-center flex-col"
      >
        <div className="row m-2 p-1 ">
          <label className="w-1/3 font-bold text-xs">Name</label>
          <input
            className="w-2/3 text-sm"
            type="text"
            placeholder="House, Rent, SIP"
            {...register("name")}
          />
        </div>
        <div className="row m-2 p-2">
          <label className="w-1/3 font-bold text-sm p-1">Type</label>
          <select className="w-2/3 text-xs" {...register("type")}>
            <option value="Select categoery">Select</option>
            <option value="income">income</option>
            <option value="investment">investment</option>
            <option value="expense">expense</option>
            <option value="savings">savings</option>
          </select>
        </div>
        <div className="row m-1 p-1">
          <label className="w-1/3 font-bold text-xs ">Amount</label>

          <input
            type="number"
            placeholder="Amount"
            className="w-2/3 text-sm p-1"
            {...register("amount")}
          />
        </div>
        <div className="row m-2 p-1 align-center justify-center">
          <label className="w-1/3 font-bold text-xs">Date</label>
          <input
            type="date"
            {...register("transDate")}
            className="w-2/3 text-sm p-1"
          />
        </div>
        <div className="row align-center justify-center mt-4">
          <input
            className="bg-indigo-700 text-light rounded-md  m-2 center text-sm p-1 w-auto p-2"
            type="submit"
            value="Add"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
