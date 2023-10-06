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
import { FiArrowDownLeft } from "react-icons/fi";
import { FiArrowUpRight } from "react-icons/fi";
import { toast } from "react-toastify";

function TransactionsHistory() {
  const trans = useSelector<AppState, Trans[]>(({ trans }) => trans);
  const email = useSelector<AppState, string>((state) => state.user.email);
  const [editId, setEditId] = useState("");
  const [transName, setTransName] = useState("");
  const [transType, setTransType] = useState("");
  const [transAmount, setTransAmount] = useState(0);

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
        toast.success(res.data, { position: "top-right", autoClose: 3000 });
        setEditId("");
      }
    } else {
      toast.error("Fields not must be empty", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };
  const deleteTransaction = async (id: string) => {
    const res = await axios.delete(`${apiDeleteTrans}/${id}`);
    if (res) {
      toast.success(res.data, { position: "top-right", autoClose: 3000 });
    } else {
      toast.error("Something went wrong", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };
  return (
    <div className="row bg-indigo-200">
      <div className="w-1/5 mx-3 ">
        <Sidebar />
      </div>
      <div className="w-3/4 my-4 m-2 ">
        {" "}
        <Table className="" striped bordered variant="light">
          <thead>
            <tr>
              <th
                className="text-white text-center text-sm"
                style={{ background: "orange" }}
              >
                S.no
              </th>
              <th
                className="text-white text-center text-sm"
                style={{ background: "orange" }}
              >
                Name
              </th>
              <th
                className="text-white text-center text-sm"
                style={{ background: "orange" }}
              >
                Type
              </th>
              <th
                className="text-white text-center text-sm"
                style={{ background: "orange" }}
              >
                Amount
              </th>
              <th
                className="text-white text-center text-sm"
                style={{ background: "orange" }}
              >
                Action(Edit/Delete)
              </th>
            </tr>
          </thead>
          <tbody>
            {trans !== null &&
              trans
                .slice(trans.length - 14, trans.length)
                .map((tran, index) => (
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
                              <option value="income">income</option>
                              <option value="investment">investment</option>
                              <option value="expense">expense</option>
                              <option value="savings">savings</option>
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
                          <td className="flex border-1">
                            <button
                              className="flex  text-success font-bold text-xs  ml-12"
                              onClick={() => submitForm(`${tran._id}`)}
                            >
                              {" "}
                              Update
                            </button>
                            <button
                              className="flex text-success font-bold text-xs  ml-12"
                              onClick={() => setEditId("")}
                            >
                              {" "}
                              Cancel
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
                          </td>{" "}
                          <td
                            className="flex align-center justify-center font-bold"
                            style={{
                              color: `${
                                tran.type === "income" ? "green" : "red"
                              }`,
                            }}
                          >
                            <span> {tran.amount}</span>
                            <span>
                              {tran.type === "income" ? (
                                <>
                                  <FiArrowDownLeft />
                                </>
                              ) : (
                                <>
                                  <FiArrowUpRight />
                                </>
                              )}
                            </span>
                          </td>
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
