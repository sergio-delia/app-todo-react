import { getTodos as fetchTodos, getFilters, removeTodo, newTodo, changeCompleted } from '../../service/todoService';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { filterTodo } from './filterSlice';




export const getTodos = createAsyncThunk(
    'todos/getTodos', async (data = null, {rejectWithValue, getState, dispatch}) => {
  
      let [todos, activeFilter] = await Promise.all([fetchTodos(), getFilters()]);
    
      let filter = activeFilter[0];
  
      dispatch(filterTodo(filter));
  
      todos = todos.filter(todo =>{
        if(filter ==='ALL'){
          return true;
        }
        if(filter ==='COMPLETED'){
          return todo.completed;
        }
        return !todo.completed;
      });
    return todos;
  
    }
  );


  
  
export const removeTodos = createAsyncThunk(
    'todos/removeTodos', async (todo, {rejectWithValue, getState, dispatch}) => {
  
      const res = await removeTodo(todo);
        
      return todo;
  
    }
  );



  export const addTodo = createAsyncThunk(
    'todos/addTodos', async (todo, {rejectWithValue, getState, dispatch}) => {
  
      return await newTodo(todo);
  
  
    }
  );


  export const toggleTodo = createAsyncThunk(
    'todos/toggle', async (todo, {rejectWithValue, getState, dispatch}) => {
  
      return await changeCompleted(todo);
  
  
    }
  );