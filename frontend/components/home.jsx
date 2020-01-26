import React from 'react'
import { Link } from 'react-router-dom';
import NoteForm from './notes/note_form'
import NoteIndex from './notes/note_index'



class Home extends React.Component {
  constructor(props) {
    super(props)

  this.handleSubmit = this.handleSubmit.bind(this);
  }
// const Home = ({ logout }) => { 

handleSubmit(e) {
  e.prevventDefault;
  logout()
}
render() {
  return (
    <div className="home-screen">


      <div className="hamburger"></div>
      <div className="hamburger"></div>
      <div className="hamburger"></div>
      <button className='logout' onClick={this.handleSubmit}>Log Out</button>
      <NoteForm />
      <NoteIndex />
    </div>

  )
}
  
}


export default Home;