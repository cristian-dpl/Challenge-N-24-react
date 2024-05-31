// punto 4

import { Note } from "./Note"

export const List = ({ notes, editNote, deleteNote, toggleFavorite }) => {
  return (
    <div>
      {notes.map(note => (
        <Note
          key={note.id}
          note={note}
          editNote={editNote}
          deleteNote={deleteNote}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>

  )
}
