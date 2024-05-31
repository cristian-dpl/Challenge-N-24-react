// punto 2

import { useState } from 'react'
import { Form } from './Form';
import { List } from './List';
import './App.css'

function App() {
  const [notes, setNotes] = useState([])

  // punto 5
  const addNote = (title, content) => {
    const newNote = { id: Date.now(), title, content, favorite: false };
    setNotes([...notes, newNote]);
  };

  // punto 6
  const editNote = (id, updatedTitle, updatedContent) => {
    setNotes(notes.map(note => (note.id === id ? { ...note, title: updatedTitle, content: updatedContent } : note)));
  };
  // ... punto 6
  const deleteNote = id => {
    setNotes(notes.filter(note => note.id !== id));
  };

  // punto 7
  const toggleFavorite = id => {
    setNotes(notes.map(note => (note.id === id ? { ...note, favorite: !note.favorite } : note)));
  };

  return (
    <div className="App">
      <h1>Notas</h1>
      <Form addNote={addNote} />
      <List
        notes={notes}
        editNote={editNote}
        deleteNote={deleteNote}
        toggleFavorite={toggleFavorite}
      />
    </div>

  )
}

export default App
