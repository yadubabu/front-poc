import { Button } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import { apiDeleteTrans, apiEditTrans } from "../../redux/apis";
type Props = {
  index: number;
  id: string;
  name: string;
  type: string;
  amount: number;
};
const deleteTransaction = async (id: string) => {
  const res = await axios.delete(`${apiDeleteTrans}/${id}`);
  console.log(res.data);
};
const TransFormCard = (props: Props) => {
  const [showEdit, setShowEdit] = useState(false);

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState(0);

  const submitForm = async (id: string) => {
    const res = await axios.put(`${apiEditTrans}/${id}`, {
      name,
      type,
      amount,
    });
    if (res) {
      alert("edit successfully");
      setShowEdit(false);
    }
  };
  return (
    <>
      <tr>
        <td>{props.index}</td>
        <td onClick={() => setShowEdit(true)}>
          {showEdit ? (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          ) : (
            <>{props.name}</>
          )}
        </td>
        <td onClick={() => setShowEdit(true)}>
          {showEdit ? (
            <select
              onChange={(e: React.ChangeEvent<HTMLSelectElement | any>) =>
                setType(e.target.value)
              }
            >
              <option value="Select categoery">Select</option>
              <option value="investment">Investment</option>
              <option value="expense">Expense</option>
              <option value="savings">Savings</option>
            </select>
          ) : (
            <>{props.type}</>
          )}
        </td>
        <td onClick={() => setShowEdit(true)}>
          {showEdit ? (
            <input
              type="number"
              value={amount}
              onChange={(e: React.ChangeEvent<HTMLInputElement | any>) =>
                setAmount(e.target.value)
              }
            />
          ) : (
            <>{props.type}</>
          )}
        </td>
        <td>
          <button type="submit" onClick={() => submitForm(props.id)}>
            Edit
          </button>
          <Button
            className="btn btn-danger"
            onClick={() => deleteTransaction(`${props.id}`)}
          >
            Delete
          </Button>
        </td>
      </tr>
    </>
  );
};
export default TransFormCard;
