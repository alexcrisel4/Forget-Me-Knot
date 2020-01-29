import { Link } from 'react-router-dom';
import React from 'react';

const NoteIndexItem = ({ note }) => {
  return (
    <div className="note-container">
      <h2>{note.title}</h2>
      <p>{note.body}</p>
      <Link to=""><i class="fas fa-edit"></i></Link>
    </div>
  )
}

export default NoteIndexItem;

