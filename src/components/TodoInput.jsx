import { useDispatch, useSelector } from "react-redux"
import { editclose, todoadd, todoedit, todoiptext } from "../modules/todolist";
import { useRef } from "react";

const TodoInput = () => {
    const dispatch = useDispatch()
    const text = useSelector(state => state.todolist.text)
    const selectid = useSelector(state => state.todolist.selectid)
    const ref=useRef()
    const submit = e => {
        e.preventDefault()
        if (!selectid) {
            if(text!==''){
                dispatch(todoadd())
            dispatch(todoiptext(''))
            }
        }
        else {
            dispatch(todoedit())
            dispatch(todoiptext(''))
        }
        ref.current.focus();
    }

    return (
        <>
            <form onSubmit={submit} >
                <input type="text" placeholder={selectid ? "수정할 내용" : "내용을 입력하세요"}
                    onChange={e => dispatch(todoiptext(e.target.value))}
                    value={text} ref={ref}
                />
            </form>
            {selectid ? <button onClick={() => dispatch(editclose())} >수정안함;</button> : <button onClick={submit} >입력</button>}
        </>
    );
};

export default TodoInput;