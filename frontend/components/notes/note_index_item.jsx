import { Link } from 'react-router-dom';
import React from 'react';

const NoteIndexItem = ({ note }) => {
  return (
    <div>
      <h2>{note.title}</h2>
      <p>{note.body}</p>
    </div>
  )
}

export default NoteIndexItem;

