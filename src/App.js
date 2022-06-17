import { useState, useEffect } from 'react';
import './App.css';
import {TaskForm} from './Components/TaskForm';
import {TaskTable} from './Components/TaskTable';
import { VisibilityControl } from './Components/VisibilityControl';
import {Container} from './Components/Container'

function App() {

  const [taskItems,setTaskItems]= useState([])
  const [showCompleted,setshowCompleted]= useState(false)

  function createNewTask(taskName){
      if (!taskItems.find(task => task.name === taskName)) 
      {
        setTaskItems([...taskItems, {name:taskName, done:false}])
      } else {
        alert('The task already exist')
      }
      
  }

  const cleanTask= () =>{
    setTaskItems(
    taskItems.filter(task => !task.done)
    )
    setshowCompleted(false)
  }

  function toggleTask (task){
    setTaskItems(
    taskItems.map(t=> (t.name ===task.name) ? {...t, done: !t.done}: t)
    )
  }
  useEffect(()=>{
    let data = localStorage.getItem('tasks')
    if (data){
      setTaskItems(JSON.parse(data))
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(taskItems))
  },[taskItems])

  return (
    <main className="bg-secondary vh-100 text-white">
        <Container>
          <TaskForm createNewTask={createNewTask} />

          <TaskTable tasks={taskItems} toggleTask={toggleTask} />
          <VisibilityControl 
          setshowCompleted={(checked) => setshowCompleted(checked)}
          cleanTask={cleanTask}
          isChecked={showCompleted}
          />


          {
            showCompleted === true && (
              <TaskTable tasks={taskItems} 
          toggleTask={toggleTask}
          showCompleted={showCompleted}
          />
            )
          }
          </Container>
     
    </main>
  );
}

export default App;
