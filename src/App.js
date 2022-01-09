import React, { useRef, useEffect } from 'react';
import { addTodo, SergioDeleteToDo, getTodos } from './features/todos/todosSlice';
import { filterTodo } from './features/todos/filterSlice';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import MyTodos from './features/todos/Mytodos';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Lists from './features/lists/Lists';

function App() {

  const dispatch = useDispatch();


  useEffect(() => {


    dispatch(getTodos()).unwrap().then(res => {
      console.log('Andato a buon fine');
    }).catch(error => {
      toast.error(error.message);
    });

    return () => {

    }
  }, [dispatch])



  //importiamo dallo store la fetta che ci interessa (store.js in app)
  let todos = useSelector(state => state.todos);
  const activeFilter = useSelector(state => state.filter);


  todos = todos.filter(todo => {
    if (activeFilter === 'ALL') {
      return true;
    }
    if (activeFilter === 'COMPLETED') {
      return todo.completed;
    }
    // default TODO
    return !todo.completed;
  });



  const todoEl = useRef('');


  const manageClick = (e) => {

    e.preventDefault();
    //dispatch(addTodo({id:todos.length + 1, completed:false, name: todoEl.current.value, dueDate: new Date().toLocaleDateString(), user_id: 1}));

    dispatch(addTodo({
      completed: false,
      name: todoEl.current.value,
      dueDate: new Date().toLocaleDateString(),
      user_id: 1
    }));

    todoEl.current.value = '';
  }


  const manageClickDelete = (e) => {

    e.preventDefault();
    dispatch(SergioDeleteToDo(todoEl.current.value));

  }


  const onFilterTodo = (filter) => {

    dispatch(filterTodo(filter));

  }


  return (
    <div className="App container-fluid">
      <Router>
        <Header/>
      <div className="row d-flex justify-content-center">

        <Switch>
          <Route path="/todos">

            <MyTodos 
              todos = {todos} 
              todoEl = {todoEl} 
              onFilterTodo = {onFilterTodo} 
              manageClick = {manageClick} 
              manageClickDelete={manageClickDelete} 
              activeFilter = {activeFilter}>

            </MyTodos>

          </Route>
          <Route exact path="(/|/lists)">
            <Lists />
          </Route>

        </Switch>

      </div>
      </Router>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

    </div>
  );
}

export default App;
