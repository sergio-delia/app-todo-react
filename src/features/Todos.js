import Todo from './todos/Todo';


export const Todos = ({todos, removeTodo, updateTodo}) => {

    
    const onRemove = (todo) => {
        removeTodo(todo.id)
    }

    const onToggle = async (todo) => {
        const newTodo = {...todo,completed:!todo.completed}
        try {

        const res= await updateTodo(newTodo).unwrap();

        } catch(e){
            console.log(e);
        } 
    }
    return(
        <ul className="list-group list-group-flush" id="TodoList">

      {todos.map(todo => <Todo key={todo.id} todo={todo} onToggleToDo={onToggle} onRemoveToDo={onRemove} />)}

      </ul>
    )
}

export default Todos;