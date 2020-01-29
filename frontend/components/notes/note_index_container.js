import NoteIndex from './note_index';
import { connect } from 'react-redux';
import { fetchNotes, updateNote, deleteNote } from '../../actions/note_actions';

const mapStateToProps = (state) => {
  
  let notes = Object.values(state.entities.notes)
  
  return ({
    notes: notes
  })


}

const mapDispatchToProps = dispatch => {
  return ({
    fetchNotes: () => dispatch(fetchNotes()),
    updateNote: (id) => dispatch(updateNote(id)),
    deleteNote: (id) => dispatch(deleteNote(id))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteIndex);