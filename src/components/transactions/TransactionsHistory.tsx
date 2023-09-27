import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { Trans } from "../../dataTypes";
import { AppState } from "../../redux/store";
import Sidebar from "../Sidebar";
import TransFormCard from "./TransFormCard";

function TransactionsHistory() {
  const trans = useSelector<AppState, Trans[]>(({ trans }) => trans);

  return (
    <div className="row" style={{ background: "gray" }}>
      <div className="col-2 mt-2">
        <Sidebar />
      </div>
      <div className="col-10 mt-3">
        {" "}
        <Table className="" striped="row" variant="primary" bordered>
          <thead>
            <tr>
              <th
                className="text-dark text-center"
                style={{ background: "purple" }}
              >
                S.no
              </th>
              <th
                className="text-dark text-center"
                style={{ background: "purple" }}
              >
                Name
              </th>
              <th
                className="text-dark text-center"
                style={{ background: "purple" }}
              >
                Type
              </th>
              <th
                className="text-dark text-center"
                style={{ background: "purple" }}
              >
                Amount
              </th>
              <th
                className="text-dark text-center"
                style={{ background: "purple" }}
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
