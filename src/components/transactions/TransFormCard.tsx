import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { apiDeleteTrans, apiEditTrans } from "../../redux/apis";
import { Trans } from "../../dataTypes";
import { AiFillEdit } from "react-icons/ai";
import { AiTwotoneDelete } from "react-icons/ai";

type Props = {
  transaction: Trans;
  index: number;
};

const TransFormCard = (props: Props) => {
  const trans = useSelector<AppState, Trans[]>(({ trans }) => trans);

  const { _id, email, name, type, amount } = props.transaction;
  const [editId, setEditId] = useState("");
  const [showEdit, setShowEdit] = useState(false);
  const [transName, setTransName] = useState("");
  const [transType, setTransType] = useState("");
  const [transAmount, setTransAmount] = useState(0);

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
        alert("Edited successfully");
        setShowEdit(false);
      }
    } else {
      alert("Please select transaction and add new values");
    }
  };
  const deleteTransaction = async (id: string) => {
    const res = await axios.delete(`${apiDeleteTrans}/${id}`);
    if (res) {
      alert("One record is Deleted");
    }
  };
  return (
    <>
      {editId === "" ? (
        <>
          <tr>
            <td>{props.index}</td>
            <td>{name}</td>
            <td>{type}</td>
            <td>{amount}</td>
            <td className="editDel">
              <button className='btn btn-primary'
                onClick={() => editForm(_id)}
              >Edit
              </button>
              <button className='btn btn-danger'
                onClick={() => deleteTransaction(`${_id}`)}
              >Delete
              </button>
            </td>
          </tr>
        </>
      ) : (
        <>
          <tr>
            <td className="text-center" style={{ color: "black" }}>
              {props.index}
            </td>
            <td className="text-center" style={{ color: "black" }}>
              <input
                type="text"
                value={transName}
                onChange={(e) => setTransName(e.target.value)}
              />
              <>{name}</>
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
              <>{type}</>
            </td>
            <td className="text-center" style={{ color: "black" }}>
              <input
                type="number"
                value={transAmount}
                onChange={(e: React.ChangeEvent<HTMLInputElement | any>) =>
                  setTransAmount(e.target.value)
                }
              />
              <>{amount}</>
            </td>
            <td className="editDel">
              <button
                style={{
                  background: "inherit",
                  color: "blue",
                  border: "none",
                }}
                onClick={() => editForm(_id)}
              >
                <AiFillEdit />
              </button>
              <button
                style={{
                  background: "inherit",
                  color: "red",
                  border: "none",
                }}
                onClick={() => deleteTransaction(`${_id}`)}
              >
                <AiTwotoneDelete />
              </button>
            </td>
          </tr>
        </>
      )}

      {/* <tr>
        <td className="text-center" style={{ color: "black" }}>
          {props.index}
        </td>
        <td
          className="text-center"
          style={{ color: "black" }}
          onClick={() => setShowEdit(showEdit)}
        >
          {showEdit ? (
            <input
              type="text"
              value={transName}
              onChange={(e) => setTransName(e.target.value)}
            />
          ) : (
            <>{name}</>
          )}
        </td>
        <td
          className="text-center"
          style={{ color: "black" }}
          onClick={() => setShowEdit(true)}
        >
          {showEdit ? (
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
          ) : (
            <>{type}</>
          )}
        </td>
        <td
          className="text-center"
          style={{ color: "black" }}
          onClick={() => setShowEdit(true)}
        >
          {showEdit ? (
            <input
              type="number"
              value={transAmount}
              onChange={(e: React.ChangeEvent<HTMLInputElement | any>) =>
                setTransAmount(e.target.value)
              }
            />
          ) : (
            <>{amount}</>
          )}
        </td>
        <td className="editDel">
          <button
            style={{ background: "inherit", color: "blue", border: "none" }}
            onClick={() => submitForm(_id)}
          >
            <AiFillEdit />
          </button>
          <button
            style={{ background: "inherit", color: "red", border: "none" }}
            onClick={() => deleteTransaction(`${_id}`)}
          >
            <AiTwotoneDelete />
          </button>
        </td>
      </tr> */}
    </>
  );
};
export default TransFormCard;
