import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import { getTransactions } from "../../redux/actions/transactionActions";
import { useDispatch, useSelector } from "react-redux";
import { Trans } from "../../dataTypes";
import { AppState } from "../../redux/store";
import { Dispatch, AnyAction } from "redux";
import { Button } from "react-bootstrap";
import axios from "axios";
import { apiDeleteTrans } from "../../redux/apis";

function TransactionsHistory() {
  const [showEdit, setShowEdit] = useState(false);
  const [show, setShow] = useState({
    display: "none",
  });
  const dispatch: Dispatch<any> = useDispatch();
  const email = useSelector<AppState, string>((state) => state.user.email);

  useEffect(() => {
    dispatch(getTransactions(email));
  }, []);
  const trans = useSelector<AppState, Trans[]>(({ trans }) => trans);

  const editInput = (id: string) => {
    console.log(id);
  };
  const deleteTransaction = async (id: string) => {
    console.log(id);
  };
  return (
    <Table striped="columns">
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
              <tr>
                <td>{index + 1}</td>
                <td>{tran.name}</td>
                <td>{tran.type}</td>
                <td>{tran.amount}</td>
                <td>
                  <Button onClick={() => editInput(`${tran._id}`)}>Edit</Button>
                  <Button
                    className="btn btn-danger"
                    onClick={() => deleteTransaction(`${tran._id}`)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            </>
          );
        })}
      </tbody>
    </Table>
  );
}

export default TransactionsHistory;
