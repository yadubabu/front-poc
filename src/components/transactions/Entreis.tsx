import React, { useEffect } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useSelector } from "react-redux";
import { Trans } from "../../dataTypes";
import { AppState } from "../../redux/store";

type Props = {};

const Entries = (props: Props) => {
  const trans = useSelector<AppState, Trans[]>(({ trans }) => trans);

  return (
    <div>
      <h5 className="text-indigo-700 font-bold p-2 text-center text-xl">
        Recent Transactions
      </h5>
      {trans !== null &&
        trans
          .slice(trans.length - 5, trans.length)
          .map((val: Trans, i: number) => {
            const style = () => {
              if (val.type === "savings") {
                return "rgb(155, 05, 186)";
              } else if (val.type === "expense") {
                return "rgb(238, 174, 26)";
              } else if (val.type === "investment") {
                return "rgb(15, 127, 201)";
              }
            };

            return (
              <div className="p-1">
                <div
                  style={{ background: `${style()}` }}
                  className="text-center p-1 rounded-md"
                >
                  <span className="">{val.name}</span>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default Entries;
