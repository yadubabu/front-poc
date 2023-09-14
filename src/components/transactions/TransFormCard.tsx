import { useRef } from "react";

import { Button } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { apiDeleteTrans, apiEditTrans } from "../../redux/apis";
import { Trans } from "../../dataTypes";
type Props = {
  transaction: Trans;
  index: number;
};

const TransFormCard = (props: Props) => {
  const { _id, email, name, type, amount } = props.transaction;
  const [showEdit, setShowEdit] = useState(false);
  const [transName, setTransName] = useState("");
  const [transType, setTransType] = useState("");
  const [transAmount, setTransAmount] = useState(0);

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
      alert("Please select transaction and add your values");
    }
  };
  const deleteTransaction = async (id: string) => {
    const res = await axios.delete(`${apiDeleteTrans}/${id}`);
    console.log(res.data);
  };

  return (
    <>
      <tr>
        <td style={{ color: "whitesmoke" }}>{props.index}</td>
        <td
          style={{ color: "whitesmoke" }}
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
        <td onClick={() => setShowEdit(true)}>
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
        <td onClick={() => setShowEdit(true)}>
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
            className="btn btn-primary"
            type="submit"
            onClick={() => submitForm(_id)}
          >
            Edit
          </button>
          <Button
            className="btn btn-danger"
            onClick={() => deleteTransaction(`${_id}`)}
          >
            Delete
          </Button>
        </td>
      </tr>
    </>
  );
};
export default TransFormCard;
