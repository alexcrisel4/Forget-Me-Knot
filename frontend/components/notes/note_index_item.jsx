import { Link } from 'react-router-dom';
import React from 'react';


// class NoteIndexItem extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = this.props.notes;

  
//   }


//   render() {
//     return(
//       <div className="note-container">
//       <h2>{note.title}</h2>
//       <p>{note.body}</p>
//       <Link to=""><i class="fas fa-edit"></i></Link>
//       <button onClick={this.props.delete(this.state.notes.i)}><i class="fa fa-trash"></i></button>
//     </div>
//     )
//   }
// }



const  NoteIndexItem = ({ note }) => {
  return (
    <Link to={`/notes/${note.id}`}>
    <div  className="note-container">
      <h2>{note.title}</h2>
      <p>{note.body}</p>
      <div className="index-item-buttons">
      
      <button><i className="fa fa-trash"></i></button>
      </div>
    </div>
    </Link>
  )
}

export default NoteIndexItem;

