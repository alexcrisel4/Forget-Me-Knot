import { connect } from 'react-redux';
import UpdateForm from './note_form';
import { updateNote } from '../../actions/note_actions';

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
    updateNote: (note) => dispatch(updateNote(note))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateForm)