import { createSlice } from '@reduxjs/toolkit';
import { getTodos, removeTodos, addTodo, toggleTodo } from './thunksTodo';

/*
const initTodos = [
    {
      completed: true,
      name:"Call my mom",
      dueDate: new Date().toLocaleDateString(),
      user_id: 1,
      id:1
    },
    {
      completed: false,
      name:"Go to school",
      dueDate: new Date().toLocaleDateString(),
      user_id: 1,
      id:2
    },
    {
      completed: true,
      name:"Do homework",
      dueDate: new Date().toLocaleDateString(),
      user_id: 1,
      id:3
    }
  ];
*/


// json-server --watch db.json --port=3004

export const todosSlice = createSlice(
    {
        name: 'todos',
       // initialState: initTodos,
       initialState: [],
        reducers:{
          /*  addToDo(state,action){
                console.log('reducer',state, action);
                state.push(action.payload);
            },*/
            /*removeToDo(state,action){
                return state.filter(todo => todo.id !== action.payload.id);
            },*/
          /*  toggleToDo(state,action){
              
              const id = action.payload.id
               state.map(todo => {

                if(todo.id === id){

                  todo.completed = !todo.completed;

                }

                return todo;

              });
            },*/
            SergioDeleteToDo(state,action){
                
                return state.filter(todo => todo.name !== action.payload);
            }
        },
        extraReducers: (builder) => {

          builder.addCase(getTodos.pending, (state, action) => {
              // action is inferred correctly here if using TS

            }).addCase(getTodos.fulfilled, (state,action) =>{

              state = action.payload;
              console.log(state);
              return state;

            }).addCase(removeTodos.fulfilled, (state,action) =>{

              state = state.filter(ele => ele.id !== action.payload.id)
              return state;
            }).addCase(addTodo.fulfilled, (state,action) =>{
              console.log(action.payload);
              state.push(action.payload);
            }).addCase(toggleTodo.fulfilled, (state,action) =>{

              const idx = state.findIndex(ele => ele.id === action.payload.id);

              if(idx !== -1){
               state.splice(idx,1,action.payload);
              }
            })
          }

    }
);

console.log(todosSlice);
const {actions, reducer} = todosSlice;
//export const {addToDo, toggleToDo, SergioDeleteToDo} = actions;
export const {SergioDeleteToDo} = actions;
export default reducer;
export {getTodos};
export {removeTodos};
export {toggleTodo};
export {addTodo};