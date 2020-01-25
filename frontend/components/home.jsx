import React from 'react'
import { Link } from 'react-router-dom';
import NoteForm from './notes/note_form'
import NoteIndex from './notes/note_index'
const Home = ({ logout }) => { 

const handleSubmit = () => {
  logout()
}
  return (
    <div className="home-screen">
     

      <div className="hamburger"></div>
      <div className="hamburger"></div>
      <div className="hamburger"></div>
      <button className='logout' onClick={handleSubmit}>Log Out</button>
      <NoteForm/>
      <NoteIndex/>
    </div>
    
  )
}

export default Home;