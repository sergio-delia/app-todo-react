import {createStore} from  'redux'


/* IMPORTANTE che in index.js il componente app sia avvolto da provider con valore store */ 
const initTodos = [
    {
      name:"Call my mom",
      dueDate: new Date().toLocaleDateString(),
      user_id: 1
    },
    {
      name:"Go to school",
      dueDate: new Date().toLocaleDateString(),
      user_id: 1
    },
    {
      name:"Do homework",
      dueDate: new Date().toLocaleDateString(),
      user_id: 1
    }
  ];

const reducer = (state,action) => {

/* Lo state viene passato in automatico quando in App facciamo il dispatcher */

    switch (action.type) {
        case 'ADD_TODO':

            return [action.payload, ...state];       
            break;

        case 'DEL_TODO':
           state = action.payload;
           return state;       
           break;
      
           case 'REMOVE_TODO':
            return state.filter(t => t.name !== action.payload.name);      
            break;
        
        default:
            return state;
            break;
    }

};

export const store = createStore(reducer, initTodos,window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());