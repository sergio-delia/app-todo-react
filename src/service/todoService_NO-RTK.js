import { TODO_URL, FILTER_URL} from '../config';


export const getTodos = async () =>{

    return fetch(TODO_URL).then(res => res.json()).then(res=> res);

}


export const getFilters = async () => {

    return fetch(FILTER_URL).then(res => res.json()).then(res=> res);
    
}



export const removeTodo = async (todo) => {

    return fetch(
        TODO_URL + '/' + todo.id,
        {
            method: 'DELETE'
        }
        ).then(res => res.json()).then(res=> res);
    
}

export const newTodo = async (todo) => {

    console.log(JSON.stringify(todo));
    return fetch(
        TODO_URL,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        }
        ).then(res => res.json()).then(res=> res);
    
}


export const changeCompleted = async (todo) => {


    return fetch(
        TODO_URL+ '/' + todo.id,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        }
        ).then(res => res.json()).then(res=> res);
    
}