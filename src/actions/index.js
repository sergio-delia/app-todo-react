export const addToDo = (name) => {
    

    const newToDo = {name: name, dueDate: new Date().toLocaleDateString(), user_id:1};

    return({type:'ADD_TODO', payload: newToDo})


  }



  export const removeToDo = (todo) => {
    

    return({type:'REMOVE_TODO', payload: todo})


  }



  export const SergioDeleteToDo = (todos, name) => {
    
    const newToDo = [];

    todos.map(todo => {
        if(todo.name != name){
            newToDo.push({name: todo.name, dueDate: todo.dueDate, user_id: todo.user_id});      
        }
    })

    return({type:'DEL_TODO', payload: newToDo})


  }