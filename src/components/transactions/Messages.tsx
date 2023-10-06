import { useSelector,useDispatch } from "react-redux";
import { AppState } from "../../redux/store";
import { useEffect } from "react";
import { Messages } from "../../dataTypes";
import { messageService } from "../../redux/services/allServices";
import { Dispatch } from "redux";
import axios from "axios";
const GetMessages=()=>{
    const dispatch: Dispatch<any> = useDispatch();
    const email=useSelector<AppState,string>(state=>state.user.email);
    const messages=useSelector<AppState,Messages[]>(state=>state.messages);

    useEffect(()=>{

        dispatch(messageService(email))
      },[])
   
    return(
        <div className="bg-indigo-100 text-center m-3 p-3 rounded-xl flex-col align-center justify-center w-1/2">
            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white text-xl font-bold ">Messages</h3>
            {messages.map((message:Messages)=>{
                return (<div>
<ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600 flex align-center justify-center">
        <div className="flex items-center pl-3">
            <label  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{message.message} </label>
        </div>
        <hr/>
    </li>
    </ul>
                </div>)
            })}
        </div>
    )
}
export default GetMessages;