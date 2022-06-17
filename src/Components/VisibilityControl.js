export const VisibilityControl = ({setshowCompleted, cleanTask, isCheked}) =>{

   const handleDelete = () =>{
    if (window.confirm('Are you sure you want delete selected tasks')){
    cleanTask()
    }
   }

return(
    <div className="d-flex justify-content-between bg-success text-white text-center p-3 border-success" >
        <div className="form-check form-switch">
        <input 
        className="form-check-input"
        type="checkbox"
        onChange={e => setshowCompleted(e.target.checked)}        
        checked={isCheked}
        />{" "}
        <label>Show Tasks Done</label>
        </div>
        <button
        className="btn btn-danger"
        onClick={handleDelete}>
            Clear
        </button>
      </div>
)
}