import React from 'react'
import TaskList from './components/TaskList'
import Form from './components/Form'
import { tasks as data } from "./data/tasks";
import {useState, useEffect} from 'react'

function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
      setTasks(data);
    }, []);


    function createTask(task) {
      setTasks([
        ...tasks,
        {
          title: task.title,
          id: tasks.length,
          descripcion: task.descripcion,
        },
      ]);
    }

  return (
    <div>
      <Form createTask={createTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App
