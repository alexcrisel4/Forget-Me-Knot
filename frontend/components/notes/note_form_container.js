import { connect } from 'react-redux';
import NoteForm from './note_form';
import { createNote } from '../../actions/note_actions';

const mapStateToProps = state => {
  return ({
    formDefault: {
      title: "",
      body: "",
      author_id: state.session.id,
    }
  })
}

const mapDispatchToProps = dispatch => {

  return ({
    createNote: (note) => dispatch(createNote(note))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm)