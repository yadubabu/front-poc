import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../../redux/store";
import { FaRupeeSign } from "react-icons/fa";
import "./style.css";
const BalanceCard = () => {
  const availableAmount = useSelector<AppState, number>(
    ({ account }) => account.availableAmount
  );
  return (
    <div className="bal flex rounded-full m-4 align-center justify-center text-xl">
      <span className="font-bold text-2xl ">Available Balance-</span>
      <span className="mt-2 text-md font-bold text-rgba(68, 10, 14, 0.918)">
        <FaRupeeSign />
      </span>
      <span className="text-rgba(68, 10, 14, 0.918) font-bold text-2xl  pb-1">
        {availableAmount}
      </span>
    </div>
  );
};

export default BalanceCard;
