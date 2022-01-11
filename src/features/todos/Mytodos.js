import Todos from '../Todos'
import AddToDo from './AddToDo';
import FilterTodos from './FilterTodos';
import ErrorBoundary from '../../components/ErrorBoundary';
import { useRef} from 'react';
import {useGetTodosQuery, useAddTodoMutation, useDeleteTodoMutation, useUpdateTodoMutation} from '../../service/todoService';
import { useSelector, useDispatch } from 'react-redux';
import {filterTodo} from './filterSlice';
import { useLocation, useParams, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';


const Mytodos = ({ manageClickDelete }) => {


let { list_id } = useParams();
list_id = Number(list_id);
const { search } = useLocation();
const pars = new URLSearchParams(search);
const list_name = (pars.get('list_name') ? pars.get('list_name'): '');


  const dispatch = useDispatch();
  const todoEl = useRef('');

const activeFilter = useSelector(state => state.filter);

      /* FUNZIONE ELIMINAZIONE TODO TRAMITE RTK QUERY */
      const [addTodo, {isLoading:isAdding, isSuccess:isAddSuccess, error:addError, isError:isAddError}] = useAddTodoMutation();
      /* FINE FUNZIONE ELIMINAZIONE TODO */
  
  
      /* FUNZIONE ELIMINAZIONE TODO TRAMITE RTK QUERY */
      const [updateTodo, {isLoading:isUpdating, isSuccess:isUpdateSuccess, error:updateError, isError:isUpdateError}] = useUpdateTodoMutation();
      /* FINE FUNZIONE ELIMINAZIONE TODO */


      /* FUNZIONE ELIMINAZIONE TODO TRAMITE RTK QUERY */
      const [removeTodo, {isLoading:isDeleting, isSuccess:isDelSuccess, error:deleteError, isError:isDeleteError}] = useDeleteTodoMutation();
     // I mutations al contrario dei query ritornano una funzione (removeList) che poi può essere richiamata per fare la dispatch
     /* FINE FUNZIONE ELIMINAZIONE TODO */


    
    /* IMPORTAZIONE TODOS */
    const {data = [], isError, isLoading, isFetching, refetch:reloadLists } = useGetTodosQuery(list_id);
    /* FINE IMPORTAZIONE TODOS */


   // let todos = data.filter(ele => ele.list_id == list_id);
    const todos = data.filter(todo => {
      if (activeFilter === 'ALL') {
        return true;
      }
      if (activeFilter === 'COMPLETED') {
        return todo.completed;
      }
      // default TODO
      return !todo.completed;
    });


const manageClick = (evt) =>{

  evt.preventDefault();
  addTodo({
    completed: false,
    name: todoEl.current.value,
    created_at: new Date().toLocaleDateString(),
    user_id: 1,
    list_id
  });

  todoEl.current.value = '';

}



const onFilterTodo = (filter) => {

  dispatch(filterTodo(filter));

}
    
    return(
        <>
                    <h1>My Todo List {list_name}</h1>
        <div className="col-md-6">
          <AddToDo todoEl={todoEl} manageClick={manageClick} manageClickDelete={manageClickDelete} />
          <ErrorBoundary>
            <Todos todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} />
          </ErrorBoundary>
          <FilterTodos filter={activeFilter} onFilter={onFilterTodo} />
        </div>
        
        </>
    );

}

export default Mytodos;





/*

Logica prima delle rtk query

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



*/