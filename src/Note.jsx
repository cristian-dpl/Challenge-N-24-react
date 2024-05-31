import { useState } from "react";

export const Note = ({ note, editNote, deleteNote, toggleFavorite }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedTitle, setUpdatedTitle] = useState(note.title);
    const [updatedContent, setUpdatedContent] = useState(note.content);

    const handleEdit = (e) => {
        e.preventDefault();
        editNote(note.id, updatedTitle, updatedContent);
        setIsEditing(false);
    };

    return (
        <div className={`note ${note.favorite ? 'favorite' : ''}`}>
        {isEditing ? (
        <form onSubmit={handleEdit}>
            <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
            required
        />
        <textarea
          value={updatedContent}
          onChange={(e) => setUpdatedContent(e.target.value)}
          required
        />
        <button type="submit">Guardar</button>
      </form>
        ) : (
        <div>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <button onClick={() => setIsEditing(true)}>Editar</button>
            <button onClick={() => deleteNote(note.id)}>Eliminar</button>
            <button onClick={() => toggleFavorite(note.id)}>
            {note.favorite ? 'Desmarcar' : 'Marcar'} como Favorita
            </button>
        </div>
        )}
        </div>
    )
}
