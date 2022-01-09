const AddToDo = ({todoEl, manageClick, manageClickDelete}) => {

    
    return(
        <form onSubmit={manageClick}>
            <div className="form-group">
              <input ref={todoEl} className="form-field" name="todo" id="todo"></input>
              <button className=" m-1 btn btn-success">ADD</button>
              <button onClick={manageClickDelete} className=" m-1 btn btn-success">DELETE</button>
            </div>
          </form>
    )

}

export default AddToDo;