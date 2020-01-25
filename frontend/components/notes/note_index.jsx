import React from 'react';
import NoteIndexItem from './note_index_item'
class NoteIndex extends React.Component {
  constructor(props) {
    super(props)


  }

  componentDidMount() {
    this.props.fetchNotes();
  }


  render() {
    let notes = this.props.notes.map((note, i) => {
      return <li><NoteIndexItem key={i} note={note} /></li>
    })

    return (

      <div className="index-container">
        <ul>
          {notes}
        </ul>
      </div>
    )
  }
}

export default NoteIndex;