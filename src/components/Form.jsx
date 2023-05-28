import React from "react";
import { useState } from "react";

function Form({ createTask }) {
  const [title, setTitle] = useState("");
    const [descripcion, setDescription] = useState("");

  const halderSubmit = (e) => {
    e.preventDefault();
    console.log(title, descripcion);
    createTask({
      title: title,
      descripcion: descripcion,
    });
    setTitle('')
    setDescription('')
  };

  return (
    <form onSubmit={halderSubmit}>
      <input
        placeholder="escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)} 
            value={title}
            autoFocus
          />
        <textarea placeholder="escribe la descripcion" onChange={e => setDescription(e.target.value)} 
        value={descripcion}
        />
      <button>guardar tarea</button>
    </form>
  );
}

export default Form;
