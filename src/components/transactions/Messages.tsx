import { useSelector,useDispatch } from "react-redux";
import { AppState } from "../../redux/store";
import { useEffect } from "react";
import { Messages } from "../../dataTypes";
import { messageService } from "../../redux/services/allServices";
import { Dispatch } from "redux";
import {IoMdAddCircle} from 'react-icons/io';
import {AiFillMinusCircle} from 'react-icons/ai'

const GetMessages=()=>{
    const dispatch: Dispatch<any> = useDispatch();
    const email=useSelector<AppState,string>(state=>state.user.email);
    const messages=useSelector<AppState,Messages[]>(state=>state.messages);

    useEffect(()=>{
        dispatch(messageService(email))
      },[])
   
    return(
        <div className="bg-indigo-200 w-1/2 m-4 rounded-xl pb-3">
            <div className="flex align-center justify-evenly p-3">
                <span className="text-2xl text-font">Messages</span>
                <span className="text-secondary p-1">You have{messages.length} Messages</span></div>
            <ul>
                {messages.map((message:Messages)=>{
                    return(<li className="m-4">
                        <div className="text-center flex align-center justify-evenly text-xs"><span>{message.msgDate.toString().split('-')[2].split('T')[0]}/{message.msgDate.toString().split('-')[1].split('T')[0]}</span><span>{message.msgDate.toString().split('T')[1].split('.')[0].split(':')[0]}:{message.msgDate.toString().split('T')[1].split('.')[0].split(':')[1]}</span></div>
                        <div className='flex align-center justify-between border-t border-b rounded-xl p-3 ml-2 mr-2 bg-light'><span>{message.message}</span><span>{message.message.split(' ')[3]==='Credited'? (<span className="text-success"><IoMdAddCircle/></span>):(<span className="text-danger "><AiFillMinusCircle/></span>)}</span></div>
                    </li>)
                })} 
            </ul>
        </div>

    )
}
export default GetMessages;