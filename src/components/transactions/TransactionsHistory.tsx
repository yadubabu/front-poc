import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { Trans } from "../../dataTypes";
import { AppState } from "../../redux/store";
import Sidebar from "../Sidebar";
import TransFormCard from "./TransFormCard";

function TransactionsHistory() {
  const trans = useSelector<AppState, Trans[]>(({ trans }) => trans);

  return (
    <div className="row bg-white">
      <div className="col-3">
        <Sidebar />
      </div>
      <div className="col-8 m-4">
        {" "}
        <Table className="" striped="row" variant="primary" bordered>
          <thead>
            <tr>
              <th
                className="text-warning text-center "
                style={{ background: "black" }}
              >
                S.no
              </th>
              <th
                className="text-warning text-center"
                style={{ background: "black" }}
              >
                Name
              </th>
              <th
                className="text-warning text-center"
                style={{ background: "black" }}
              >
                Type
              </th>
              <th
                className="text-warning text-center"
                style={{ background: "black" }}
              >
                Amount
              </th>
              <th
                className="text-warning text-center"
                style={{ background: "black" }}
              >
                Action(Edit/Delete)
              </th>
            </tr>
          </thead>
          <tbody>
            {trans !== null &&
              trans
                .slice(trans.length - trans.length, 8)
                .map((tran: Trans, index: number) => {
                  return (
                    <>
                      <TransFormCard index={index + 1} transaction={tran} />
                    </>
                  );
                })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default TransactionsHistory;
