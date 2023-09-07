import Table from "react-bootstrap/Table";
import { useEffect } from "react";
import { getTransactions } from "../../redux/actions/getTransactions";
import { useDispatch, useSelector } from "react-redux";
import axios, { AxiosResponse } from "axios";
import { getTransApi } from "../../redux/apis";
import { Trans } from "../../dataTypes";
import { AppState } from "../../redux/store";

function TransactionsHistory() {
  const dispatch = useDispatch();
  const email = useSelector<AppState, string>((state) => state.user.email);

  const fetchTransaction = async () => {
    const res: AxiosResponse<any, any> = await axios.get(
      `${getTransApi}/${email}`
    );
    if (res) {
      dispatch(getTransactions(res.data));
    }
  };
  useEffect(() => {
    fetchTransaction();
  }, []);
  const trans = useSelector<AppState, Trans[]>(({ trans }) => trans);

  return (
    <Table striped="columns">
      <thead>
        <tr>
          <th>S.no</th>
          <th>Name</th>
          <th>Type</th>
          <th>Amount</th>
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
              </tr>
            </>
          );
        })}
      </tbody>
    </Table>
  );
}

export default TransactionsHistory;
