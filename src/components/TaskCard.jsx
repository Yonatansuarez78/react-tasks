import React from 'react'

function TaskCard({task}) {

  function mostrarAlerta(){
    alert(task.id)
  }
  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.descripcion}</p>
      <button onClick={mostrarAlerta}>eliminar tarea</button>
    </div>
  );
}

export default TaskCard
