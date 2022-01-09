const AddElement = ({listEle, manageClick, txtButton}) => {

    
    return(
        <form onSubmit={manageClick}>
            <div className="form-group">
              <input ref={listEle} className="form-field" name="ele" id="ele"></input>
              <button className=" m-1 btn btn-success">{txtButton ?? 'ADD'}</button>
            </div>
          </form>
    )

}

export default AddElement;