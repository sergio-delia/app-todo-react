import PropTypes from 'prop-types';

export const Todo = ({ todo, onRemoveToDo, onToggleToDo }) => {

    const completedIcon = todo.completed ? <li className="bi bi-check-square"></li> : <li className="bi bi-square"></li>

    return (
        <li className="list-group-item d-flex justify-content-between">
            <span>
                <button className="btn" onClick={()=> onToggleToDo(todo)}>{completedIcon}</button>
                {todo.name}
            </span>
            <button onClick={() => onRemoveToDo(todo)} className="btn btn-danger btn-sm">
            <li className="bi bi-trash"></li> 
            </button>
      </li >
    )
}

Todo.propTypes = {
    todo: PropTypes.shape({
        completed: PropTypes.bool,
        dueDate: PropTypes.string,
        user_id: PropTypes.number,
        name: PropTypes.string
    }),
    onRemoveToDo: PropTypes.func.isRequired,
    onToggleToDo: PropTypes.func.isRequired
}

export default Todo;