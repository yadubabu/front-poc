import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { apiDeleteTrans, apiEditTrans } from "../../redux/apis";
import { Trans } from "../../dataTypes";
import { AiFillEdit } from "react-icons/ai";
import { AiTwotoneDelete } from "react-icons/ai";
import MessageModal from "../MessageModal";

type Props = {
  transaction: Trans;
  index: number;
};

const TransFormCard = (props: Props) => {
  const trans = useSelector<AppState, Trans[]>(({ trans }) => trans);

  const { _id, email, name, type, amount } = props.transaction;
  const [editId, setEditId] = useState("");
  const [transName, setTransName] = useState("");
  const [transType, setTransType] = useState("");
  const [transAmount, setTransAmount] = useState(0);
  const [msg, setMsg] = useState("");

  const editForm = (id: string) => {
    trans.map((tran: Trans) => {
      if (tran._id === id) {
        setEditId(id);
      }
    });
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
    <>
      {msg === "" ? (
        ""
      ) : (
        <>
          <MessageModal msg={msg} />
        </>
      )}
      {editId === "" ? (
        <>
          <tr>
            <td>{props.index}</td>
            <td>{name}</td>
            <td>{type}</td>
            <td>{amount}</td>
            <td className="editDel">
              <button className="btn btn-primary" onClick={() => editForm(_id)}>
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => deleteTransaction(`${_id}`)}
              >
                Delete
              </button>
            </td>
          </tr>
        </>
      ) : (
        <>
          <tr>
            <td className="text-center" style={{ color: "black" }}></td>
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
                onChange={(e: React.ChangeEvent<HTMLSelectElement | any>) =>
                  setTransType(e.target.value)
                }
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
                onChange={(e: React.ChangeEvent<HTMLInputElement | any>) =>
                  setTransAmount(e.target.value)
                }
              />
            </td>
            <td>
              <button
                className="btn btn-primary"
                onClick={() => submitForm(`${_id}`)}
              >
                Update
              </button>
              <button
                className="btn btn-danger"
                onClick={() => deleteTransaction(`${_id}`)}
              >
                Delete
              </button>
            </td>
          </tr>
        </>
      )}
    </>
  );
};
export default TransFormCard;
