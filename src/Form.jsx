// punto 3

import { useState } from "react";

export const Form = ({ addNote }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addNote(title, content);
        setTitle('');
        setContent('');
      };
    
  return (
    <form onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Título"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      required
    />
    <textarea
      placeholder="Contenido"
      value={content}
      onChange={(e) => setContent(e.target.value)}
      required
    />
    <button type="submit">Agregar Nota</button>
  </form>
  )
}
