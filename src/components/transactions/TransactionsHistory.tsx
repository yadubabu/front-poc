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
      <div className="col-2 side">
        <Sidebar />
      </div>
      <div className="col-10 mt-2">
        {" "}
        <Table className="tab" striped="columns" variant="secondary" bordered>
          <thead>
            <tr>
              <th className="text-dark text-center">S.no</th>
              <th className="text-dark text-center">Name</th>
              <th className="text-dark text-center">Type</th>
              <th className="text-dark text-center">Amount</th>
              <th className="text-dark text-center">Action(Edit/Delete)</th>
            </tr>
          </thead>
          <tbody>
            {trans
              .slice(trans.length - 9, trans.length)
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
