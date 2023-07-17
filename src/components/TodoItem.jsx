import { useDispatch } from "react-redux";
import { tododel, todoselect, todotoggle } from "../modules/todolist";

 

const TodoItem = ({i}) => {
    const dispatch=useDispatch()

    return (
        <li > 
            <input type="checkbox" checked={i.chk} onChange={()=>dispatch(todotoggle(i.id))} />
        <span className={i.chk?'on':''} onClick={()=>dispatch(todotoggle(i.id))} >
            번호 : {i.id} &nbsp;&nbsp;&nbsp;   {i.text} </span>
        <button onClick={()=>dispatch(todoselect(i.id))} > 수정</button>
        <button onClick={()=>dispatch(tododel(i.id))} > 삭제</button>
    </li>
    );
};

export default TodoItem;