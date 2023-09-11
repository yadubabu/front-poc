import { useSelector } from "react-redux";
import { Trans } from "../../../dataTypes";
import { AppState } from "../../../redux/store";
import "./style.css";
export const GetSavings = () => {
  const trans = useSelector<AppState, Trans[]>(({ trans }) => trans);
  return (
    <>
      {trans
        .filter((tran) => {
          return tran.type === "savings";
        })
        .map((el) => {
          return (
            <div className="save">
              <span>{el.name}</span>
              <span>{el.type}</span>
              <span>{el.amount}</span>
            </div>
          );
        })}
    </>
  );
};
export const GetExpenses = () => {
  const trans = useSelector<AppState, Trans[]>(({ trans }) => trans);
  return (
    <>
      {trans
        .filter((tran) => {
          return tran.type === "expense";
        })
        .map((el) => {
          return (
            <div className="exp">
              <span>{el.name}</span>
              <span>{el.type}</span>
              <span>{el.amount}</span>
            </div>
          );
        })}
    </>
  );
};

export const GetInvestment = () => {
  const trans = useSelector<AppState, Trans[]>(({ trans }) => trans);
  return (
    <>
      {trans
        .filter((tran) => {
          return tran.type === "investment";
        })
        .map((el) => {
          return (
            <div className="exp">
              <span>{el.name}</span>
              <span>{el.type}</span>
              <span>{el.amount}</span>
            </div>
          );
        })}
    </>
  );
};
