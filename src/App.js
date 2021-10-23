import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/Addtask";
import { useState, useEffect } from "react"

function App() {


  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks ] = useState([])

  useEffect(() => {
      const getTasks = async () => {
        const tasksFromServer = await fetchTasks()
        setTasks(tasksFromServer)
      }
    getTasks()
  }, [])

   const fetchTasks = async () => {
   const res = await fetch('http://localhost:5000/tasks')
      const data = await res.json()

      return data
    }

   const fetchTask = async (id) => {
   const res = await fetch(`http://localhost:5000/tasks/${id}`)
   const data = await res.json()

      return data
    }

const addtask = async (task) => {
  const res = await fetch('http://localhost:5000/tasks', {
    method: 'POST',
    headers: {
      'Contente-type': 'application/json'
    },
    body: JSON.stringify(task)
  })

  const data = await res.json()
  setTasks([...tasks, data]) 

  /**
   * 
  const id = Math.floor(Math.random() * 10000) + 1

  const newTask = {id, ...task }
  setTasks([...tasks, newTask])
   */
}

const deleteTask = async (id) => {
  await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'DELETE'
  })
  setTasks(tasks.filter((task) => task.id !== id))
}

const faceChanger = async (id) => {
  const taskToToggle = await fetchTask(id)
  const updTask = {...taskToToggle, reminder: !taskToToggle.reminder} 

  const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    mathod: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(updTask)
  })

  const data = await res.json()

  setTasks(
    tasks.map((task) => 
      task.id === id ? {...task,
      reminder: data.reminder} : task
    )
  )
}



  return (
    <div className="box">
    <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
    {showAddTask && <AddTask onAdd={addtask}/>}
    {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} 
    onToggle={faceChanger} />) : ("Ther is nothing to show")}
    </div>
  );
}

export default App;
