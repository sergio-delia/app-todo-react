import React, { useRef, useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import MyTodos from './features/todos/Mytodos';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Lists from './features/lists/Lists';

function App() {




  //importiamo dallo store la fetta che ci interessa (store.js in app)
  let todos = useSelector(state => state.todos);
// Activefilter lo gestiamo dentro mytodos da quando abbiamo implementato la logica RTK query
//  const activeFilter = useSelector(state => state.filter);


  return (
    <div className="App container-fluid">
      <Router>
        <Header/>
      <div className="row d-flex justify-content-center">

        <Switch>
          <Route path="/todos">
              <MyTodos />
          </Route>

          <Route path="/list/:list_id/todos">
              <MyTodos />
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
