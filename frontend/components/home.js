import React from 'react'
import { Link } from 'react-router-dom';
import NoteForm from './notes/note_form'

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
    </div>
    
  )
}

export default Home;