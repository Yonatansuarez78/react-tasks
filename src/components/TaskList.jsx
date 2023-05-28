import React from "react";
import TaskCard from "./TaskCard";

function TaskList({tasks}) {

if (tasks.length === 0 ) {
    return <h1>no hay tareas aun</h1>
}
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;