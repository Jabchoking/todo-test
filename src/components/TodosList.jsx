import { useSelector } from 'react-redux';
import './TodosList.css'
import TodoItem from './TodoItem';
 
const TodosList = () => {     
    const data = useSelector(state=>state.todolist.tododata)
    return (
        <ul>
            {data.map(i=> <TodoItem key={i.id} i={i} />)}
        </ul>
    );
};

export default TodosList;