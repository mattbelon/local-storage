import { useState } from 'react'

export const TaskForm = ({createNewTask}) => {
    console.log(createNewTask)
    const [NewTaskName, setNewTaskName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault(e)
        createNewTask(NewTaskName)
        //localStorage.setItem('taskName', NewTaskName)
        setNewTaskName('')
    }

    return (
        <form onSubmit={handleSubmit} className='my-2 row'>
            <div className='col-9'>
            <input type="text" placeholder="New task"
                value={NewTaskName}
                onChange={(e) => setNewTaskName(e.target.value)} 
                className='form-control'
                />
            

            </div>
            <div className='col-3'>
            <button className='btn btn-primary btn-sm'>Add task</button>
            </div>
        </form>
    )
}

