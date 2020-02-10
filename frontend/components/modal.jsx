import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import UpdateNoteContainer from './notes/update_note_container';


function Modal({ modal, closeModal }) {

  if (!modal) {
    return null;
  }
  // let component;
  // switch (modal) {
  //   case 'update':
  //     component = <UpdateNoteContainer note={note} />;
  //     break;
  //   default:
  //     return null;
  // }

  
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {/* <div>HELLO I"M A MODAL</div> */}
        <UpdateNoteContainer />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);