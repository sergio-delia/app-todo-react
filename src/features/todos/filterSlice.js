import { createSlice } from '@reduxjs/toolkit';


export const filterSlice = createSlice(
    {
        name: 'filter',
        initialState: 'ALL',
        reducers:{
            filterTodo(state,action){
                return action.payload //così ritorniamo lo stato del filtro bottone premuto
            }
        }

    }
);

const {actions, reducer} = filterSlice;
export const {filterTodo} = actions;
export default reducer;