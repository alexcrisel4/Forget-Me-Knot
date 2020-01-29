import NoteIndexItem from './note_index_item';
import { connect } from 'react-redux';
import {  updateNote, deleteNote } from '../../actions/note_actions';

const mapStateToProps = (state) => {

  let notes = Object.values(state.entities.notes)

  return ({
    notes: notes
  })


}

const mapDispatchToProps = dispatch => {
  return ({
    
    updateNote: (id) => dispatch(updateNote(id)),
    deleteNote: (id) => dispatch(deleteNote(id))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteIndexItem);