import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { Trans } from "../../dataTypes";
import { AppState } from "../../redux/store";
import Sidebar from "../Sidebar";
import TransFormCard from "./TransFormCard";
import { useState } from "react";
import axios from "axios";
import { apiEditTrans, apiDeleteTrans } from "../../redux/apis";

function TransactionsHistory() {
  const trans = useSelector<AppState, Trans[]>(({ trans }) => trans);
  const email = useSelector<AppState, string>((state) => state.user.email);
  const [editId, setEditId] = useState("");
  const [transName, setTransName] = useState("");
  const [transType, setTransType] = useState("");
  const [transAmount, setTransAmount] = useState(0);
  const [msg, setMsg] = useState("");

  const editForm = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    setEditId(id);
  };

  const submitForm = async (id: string) => {
    if (transName !== "" || transType !== "" || transAmount !== 0) {
      const res = await axios.put(`${apiEditTrans}/${id}`, {
        email,
        name: transName,
        type: transType,
        amount: transAmount,
      });
      if (res) {
        setMsg(res.data);
        setEditId("");
      }
    } else {
      alert("Please select transaction and add new values");
    }
  };
  const deleteTransaction = async (id: string) => {
    const res = await axios.delete(`${apiDeleteTrans}/${id}`);
    if (res) {
      setMsg(res.data);
    }
  };
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
            {trans.map((tran, index) => (
              <>
                {tran._id === editId ? (
                  <>
                    {" "}
                    <tr>
                      <td
                        className="text-center"
                        style={{ color: "black" }}
                      ></td>
                      <td className="text-center" style={{ color: "black" }}>
                        <input
                          type="text"
                          value={transName}
                          onChange={(e) => setTransName(e.target.value)}
                        />
                      </td>
                      <td className="text-center" style={{ color: "black" }}>
                        <select
                          value={transType}
                          onChange={(
                            e: React.ChangeEvent<HTMLSelectElement | any>
                          ) => setTransType(e.target.value)}
                        >
                          <option value="Select categoery">Select</option>
                          <option value="investment">Investment</option>
                          <option value="expense">Expense</option>
                          <option value="savings">Savings</option>
                        </select>
                      </td>
                      <td className="text-center" style={{ color: "black" }}>
                        <input
                          type="number"
                          value={transAmount}
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement | any>
                          ) => setTransAmount(e.target.value)}
                        />
                      </td>
                      <td>
                        <button
                          className="btn btn-primary"
                          onClick={() => submitForm(`${tran._id}`)}
                        >
                          Update
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteTransaction(`${tran._id}`)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                ) : (
                  <>
                    {" "}
                    <tr>
                      <td>{index + 1}</td>
                      <td>{tran.name}</td>
                      <td>{tran.type}</td>
                      <td>{tran.amount}</td>
                      <td className="editDel">
                        <button
                          className="btn btn-primary"
                          onClick={(e) => editForm(e, tran._id)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteTransaction(`${tran._id}`)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                )}
              </>
            ))}{" "}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default TransactionsHistory;
