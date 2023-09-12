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
        <Table className="mt-3" striped="columns" variant="dark" bordered>
          <thead>
            <tr>
              <th className="text-success">S.no</th>
              <th className="text-success">Name</th>
              <th className="text-success">Type</th>
              <th className="text-success">Amount</th>
              <th className="text-success">Action(Edit/Delete)</th>
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
