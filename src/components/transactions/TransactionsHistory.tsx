import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { Trans } from "../../dataTypes";
import { AppState } from "../../redux/store";
import Sidebar from "../Sidebar";
import TransFormCard from "./TransFormCard";

function TransactionsHistory() {
  const trans = useSelector<AppState, Trans[]>(({ trans }) => trans);

  return (
    <div className="row">
      <div className="col-2">
        <Sidebar />
      </div>
      <div className="col-10">
        {" "}
        <Table className="m-5" striped="columns" bordered>
          <thead>
            <tr>
              <th>S.no</th>
              <th>Name</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Action(Edit/Delete)</th>
            </tr>
          </thead>
          <tbody>
            {trans.map((tran: Trans, index: number) => {
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
