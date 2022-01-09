import {toggleTodo, removeTodos} from './todos/todosSlice';
import { useDispatch } from 'react-redux';
import Todo from './todos/Todo';


export const Todos = ({todos}) => {

    const dispatch = useDispatch();
    
    const onRemove = (todo) => {
        dispatch(removeTodos(todo))
    }

    const onToggle = async (todo) => {
        const newTodo = {...todo,completed:!todo.completed}
        try {

        const res= await dispatch(toggleTodo(newTodo)).unwrap();

        } catch(e){
            console.log(e);
        } 
    }
    return(
        <ul className="list-group list-group-flush">

      {todos.map(todo => <Todo key={todo.id} todo={todo} onToggleToDo={onToggle} onRemoveToDo={onRemove} />)}

      </ul>
    )
}

export default Todos;