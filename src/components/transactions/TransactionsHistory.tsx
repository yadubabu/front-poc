import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { Trans } from "../../dataTypes";
import { AppState } from "../../redux/store";
import { Button } from "react-bootstrap";
import axios, { AxiosResponse } from "axios";
import { apiDeleteTrans, apiEditTrans } from "../../redux/apis";
import Sidebar from "../Sidebar";
import { useState } from "react";
import TransFormCard from "./TransFormCard";

function TransactionsHistory() {
  const [showEdit, setShowEdit] = useState(false);
  const trans = useSelector<AppState, Trans[]>(({ trans }) => trans);

  const editInput = async (id: string) => {
    console.log(id);
    if (id) {
      const res: Trans[] = trans.filter((el) => el._id === id);

      if (res[0].name) {
        return (
          <>
            <input type="text" value={res[0].name} />
          </>
        );
      } else {
        return res[0].name;
      }
    }
    // const res: AxiosResponse = await axios.put(`${apiEditTrans}/${id}`);
    // console.log(res.data);
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
                  <TransFormCard
                    index={index + 1}
                    id={tran._id}
                    name={tran.name}
                    type={tran.type}
                    amount={tran.amount}
                  />
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
