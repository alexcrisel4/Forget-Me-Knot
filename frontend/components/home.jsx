import React from 'react'
import { Link } from 'react-router-dom';
import NoteForm from './notes/note_form_container'
import NoteIndex from './notes/note_index_container'



class Home extends React.Component {
  constructor(props) {
    super(props)

  this.handleSubmit = this.handleSubmit.bind(this);
  }
// const Home = ({ logout }) => { 

handleSubmit(e) {
  e.preventDefault;
  this.props.logout()
}
render() {
  return (
    <div className="home-screen">

      <div className='nav'>

      <div className="menu">
      <div className="hamburger"></div>
      <div className="hamburger"></div>
      <div className="hamburger"></div>
      </div>  
      <div className="nav-logo"></div>
      <div className="title">Forget Me Knot</div>
      <div className="current-user">{this.props.currentUser}</div>
      <button className='logout' onClick={this.handleSubmit}><i className="fas fa-sign-out-alt"></i></button>
      </div>
      <NoteForm />
      <NoteIndex />
    </div>

  )
}
  
}


export default Home;