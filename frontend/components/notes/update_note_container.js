import { connect } from 'react-redux';
import UpdateForm from './update_note';
import { updateNote, deleteNote, fetchNote} from '../../actions/note_actions';

const mapStateToProps = ({entities, ui}) => {
  debugger;
  return ({
    note: entities.notes[ui.modal.note]
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