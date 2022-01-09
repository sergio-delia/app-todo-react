import Todos from '../Todos'
import AddToDo from './AddToDo';
import FilterTodos from './FilterTodos';
import ErrorBoundary from '../../components/ErrorBoundary';


const Mytodos = ({todos, todoEl, manageClick, manageClickDelete, activeFilter, onFilterTodo}) => {
    
    return(
        <>
                    <h1>My Todo List</h1>
        <div className="col-md-6">
          <AddToDo todoEl={todoEl} manageClick={manageClick} manageClickDelete={manageClickDelete} />
          <ErrorBoundary>
            <Todos todos={todos} />
          </ErrorBoundary>
          <FilterTodos filter={activeFilter} onFilter={onFilterTodo} />
        </div>
        
        </>
    );

}

export default Mytodos;