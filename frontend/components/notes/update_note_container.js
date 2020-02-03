import { connect } from 'react-redux';
import UpdateForm from './update_note';
import { updateNote, deleteNote, fetchNote} from '../../actions/note_actions';

const mapStateToProps = (state, ownProps) => {
  
  return ({
    note: state.entities.notes[ownProps.match.params.noteId]
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    updateNote: (note) => dispatch(updateNote(note)),
    deleteNote: (id) => dispatch(deleteNote(id)),
    fetchNote: (id) =>  dispatch(fetchNote(id))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateForm)