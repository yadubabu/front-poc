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
    <div className="bal flex rounded-full bg-orange m-4 align-center justify-center text-xl">
      <span className="text-black font-bold text-md pt-1">
        Available Balance-
      </span>
      <span className="mt-2 text-md font-bold text-black">
        <FaRupeeSign />
      </span>
      <span className="text-black font-bold text-md mt-1 pb-1">
        {availableAmount}
      </span>
    </div>
  );
};

export default BalanceCard;
