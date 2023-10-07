import Sidebar from "../components/Sidebar";
import MainHead from "../components/main/MainHead";
import MainFooter from "../components/main/MainFooter";
import BalanceCard from "../components/budget/cards/BalanceCard";
import { useSelector } from "react-redux";
import { AppState } from "../redux/store";
import { User } from "../dataTypes";

const Dashboard = () => {
const user=useSelector<AppState,User>(state=>state.user);
  return (
    <>
      {user === null ? (
        ""
      ) : (
        <div className="bg-indigo-200 w-100 h-100 overflow-hidden">
          <div className="flex align-center justify-evenly">
            <div className="w-1/5 ">
              <Sidebar />
            </div>
            <div className="w-4/5">
              <div className="row-3">
                <MainHead />
              </div>
              <div className="h-1/9">
                <BalanceCard />
              </div>
              <div className="row-7">
                <MainFooter />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
