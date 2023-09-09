import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import {
  getTransactions,
  removeTransactions,
} from "../../redux/actions/transactionActions";
import { useDispatch, useSelector } from "react-redux";
import { Trans } from "../../dataTypes";
import { AppState } from "../../redux/store";
import { Dispatch, AnyAction } from "redux";
import { Button } from "react-bootstrap";
import axios, { AxiosError, AxiosResponse } from "axios";
import { apiDeleteTrans } from "../../redux/apis";
import Sidebar from "../Sidebar";

function TransactionsHistory() {
  const [showEdit, setShowEdit] = useState(false);
  const [show, setShow] = useState({
    display: "none",
  });
  const dispatch: Dispatch<any> = useDispatch();
  const email = useSelector<AppState, string>((state) => state.user.email);

  const trans = useSelector<AppState, Trans[]>(({ trans }) => trans);

  const editInput = async (id: string) => {
    const res: AxiosResponse = await axios.put(`${apiDeleteTrans}/${id}`);
    console.log(res);
  };
  const deleteTransaction = async (id: string) => {
    const res = await axios.delete(`${apiDeleteTrans}/${id}`);
    console.log(res.data);

    // .then((res:AxiosResponse)=>console.log('deleted'))
    // .catch((err:AxiosError)=>console.log(err))
  };
  return (
    <div className="row">
      <div className="col-2">
        <Sidebar />
      </div>
      <div className="col-10">
        {" "}
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
                      <Button onClick={() => editInput(`${tran._id}`)}>
                        Edit
                      </Button>
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
      </div>
    </div>
  );
}

export default TransactionsHistory;
