import React, {useRef} from 'react';
import {addToDo, SergioDeleteToDo, removeToDo} from './actions/';
import './App.css';
import { connect } from 'react-redux';

//cambiare lo store in index.js


function App(props) {

  const {addToDo, deleteToDo,SergioDeleteToDo} = props;
  const {todos} = props;

  const {testNome} = props;
  
  const todoEl = useRef(''); 


  const manageClick = (e) =>{

    e.preventDefault();
    addToDo(todoEl.current.value);

  }


  const manageClickDelete = (e) =>{

    e.preventDefault();
    SergioDeleteToDo(todos,todoEl.current.value);

  }



  return (
    <div className="App container-fluid">
      {testNome}
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
        <h1>My Todo List</h1>
          <form>
            <div className="form-group">
              <input ref={todoEl} className="form-field" name="todo" id="todo"></input>
              <button onClick={manageClick} className=" m-1 btn btn-success">ADD</button>
              <button onClick={manageClickDelete} className=" m-1 btn btn-success">DELETE</button>
            </div>
          </form>



      <ul className="list-group list-group-flush">

      {todos.map(todo => <li key={todo.name} className="list-group-item">{todo.name}
      <button onClick={()=> deleteToDo(todo)} className="btn btn-danger btn-sm">DELETE</button>
      </li>)}

      </ul>
    </div>
    
    </div>
    </div>
  );
}


const matchStateToProps = (state) => {
  return {todos: [...state]}
}

const mapDispatchToProps = (dispatch) =>{

  return {
    addToDo : (name) => dispatch(addToDo(name)),
    SergioDeleteToDo : (todos, name) => dispatch(SergioDeleteToDo(todos,name)),
    deleteToDo: todo => dispatch(removeToDo(todo)),
    testNome : 'Sergio'
  }
}

const createConnector = connect(matchStateToProps, mapDispatchToProps);
export default createConnector(App);
