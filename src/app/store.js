import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todos/todosSlice'
import filterReducer from '../features/todos/filterSlice';
import { listsApi } from '../service/listsService';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

/*
METODO LUNGO PER FARE MIDDLEWARE
const myLog = (store) =>{
  console.log('init my log');
  return function myDispatc(nextMiddleware){

    return function myAction(action){
     // store.dispatch({type:'INIT_MYLOG', payload:null});
      nextMiddleware(action);
    }
  }

}
*/


/* METODO BREVE PER CREARE UNA MIDDLEWARE */
const myLog = store => nextMiddleware => action =>{
    console.log(action);
    //store.dispatch({type:'INIT_MYLOG', payload:null});
      nextMiddleware(action);
}

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    filter: filterReducer,
    [listsApi.reducerPath] : listsApi.reducer

  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(myLog, listsApi.middleware)
});

setupListeners(store.dispatch);