import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { Trans } from "../../dataTypes";
import { AppState } from "../../redux/store";
import Sidebar from "../Sidebar";
import { useState } from "react";
import axios from "axios";
import { apiEditTrans, apiDeleteTrans } from "../../redux/apis";
import { AiTwotoneEdit } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
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
    <div className="row bg-indigo-200">
      <div className="col-3">
        <Sidebar />
      </div>
      <div className="col-8 m-4 ">
        {" "}
        <Table className="" striped bordered variant="light">
          <thead>
            <tr>
              <th
                className="text-white text-center text-sm"
                style={{ background: "black" }}
              >
                S.no
              </th>
              <th
                className="text-white text-center text-sm"
                style={{ background: "black" }}
              >
                Name
              </th>
              <th
                className="text-white text-center text-sm"
                style={{ background: "black" }}
              >
                Type
              </th>
              <th
                className="text-white text-center text-sm"
                style={{ background: "black" }}
              >
                Amount
              </th>
              <th
                className="text-white text-center text-sm"
                style={{ background: "black" }}
              >
                Action(Edit/Delete)
              </th>
            </tr>
          </thead>
          <tbody>
            {trans !== null &&
              trans.slice(trans.length - trans.length, 7).map((tran, index) => (
                <>
                  {tran._id === editId ? (
                    <>
                      {" "}
                      <tr>
                        <td
                          className="text-center text-xs"
                          style={{ color: "black" }}
                        >
                          {index + 1}
                        </td>
                        <td
                          className="text-center text-xs"
                          style={{ color: "black" }}
                        >
                          <input
                            type="text"
                            placeholder={`${tran.name}`}
                            value={transName}
                            onChange={(e) => setTransName(e.target.value)}
                          />
                        </td>
                        <td
                          className="text-center text-xs"
                          style={{ color: "black" }}
                        >
                          <select
                            value={transType}
                            className="text-center text-xs"
                            onChange={(
                              e: React.ChangeEvent<HTMLSelectElement | any>
                            ) => setTransType(e.target.value)}
                          >
                            <option value="Select categoery">
                              {tran.type}
                            </option>
                            <option value="investment">Investment</option>
                            <option value="expense">Expense</option>
                            <option value="savings">Savings</option>
                          </select>
                        </td>
                        <td
                          className="text-center text-xs"
                          style={{ color: "black" }}
                        >
                          <input
                            type="number"
                            placeholder={tran.amount.toString()}
                            value={transAmount}
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement | any>
                            ) => setTransAmount(e.target.value)}
                          />
                        </td>
                        <td>
                          <button
                            className="flex text-success font-bold text-xs  ml-12"
                            onClick={() => submitForm(`${tran._id}`)}
                          >
                            {" "}
                            <GrUpdate />
                            Update
                          </button>
                        </td>
                      </tr>
                    </>
                  ) : (
                    <>
                      {" "}
                      <tr>
                        <td className="text-center text-sm font-bold">
                          {index + 1}
                        </td>
                        <td className="text-center text-sm font-bold">
                          {tran.name}
                        </td>
                        <td className="text-center text-sm font-bold">
                          {tran.type}
                        </td>
                        <td className="text-center text-sm font-bold">
                          {tran.amount}
                        </td>
                        <center>
                          <td className="text-center font-bold">
                            <button
                              className="bg-none text-primary mr-3"
                              onClick={(e) => editForm(e, tran._id)}
                            >
                              <AiTwotoneEdit />
                            </button>
                            <button
                              className="bg-none text-danger ml-3"
                              onClick={() => deleteTransaction(`${tran._id}`)}
                            >
                              <MdDeleteForever />
                            </button>
                          </td>
                        </center>
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
