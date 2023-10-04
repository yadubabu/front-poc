import { useSelector } from "react-redux";
import { Trans } from "../../dataTypes";
import { AppState } from "../../redux/store";
import { FaRupeeSign } from "react-icons/fa";

type Props = {};

const Entries = (props: Props) => {
  const trans = useSelector<AppState, Trans[]>(({ trans }) => trans);

  return (
    <div>
      <h5 className="text-indigo-700 text-md font-bold p-2 text-center text-xl">
        Recent Transactions
      </h5>
      {trans !== null &&
        trans
          // .slice(trans.length -trans.length,5)

          .slice(trans.length - trans.length, 5)
          .map((val: Trans, i: number) => {
            const style = () => {
              if (val.type === "savings") {
                return "rgb(155, 05, 186)";
              } else if (val.type === "expense") {
                return "rgb(238, 174, 26)";
              } else if (val.type === "investment") {
                return "rgb(15, 127, 201)";
              } else if (val.type === "income") {
                return "rgb(27, 77, 14)";
              }
            };

            return (
              <div className="p-1 m-1 ">
                <div
                  style={{
                    color: `${style()}`,
                    borderLeft: `8px solid ${style()}`,
                  }}
                  className="flex align-center justify-between font-bold text-xs p-2 rounded-md"
                >
                  <span className="">{val.name}</span>
                  <span className="flex">
                    <span className="mt-1">
                      {" "}
                      <FaRupeeSign />
                    </span>
                    <span className="flex">{val.amount}</span>
                  </span>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default Entries;
