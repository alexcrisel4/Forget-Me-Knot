import { RECIEVE_NOTES, RECEIVE_NOTE, REMOVE_NOTE } from '../actions/note_actions'

const notesReducer = (state = {}, action ) => {
  Object.freeze(state);
  let newState
  switch(action.type) {
    case RECIEVE_NOTES: 
      newState = Object.assign({}, state, action.notes)
      return newState;
    case RECEIVE_NOTE:
      newState = Object.assign({}, state, { [action.payload.note.id]: action.payload.note })
      return newState;
    case REMOVE_QUIZ: 
      newState = Object.assign({}, state);
      delete newState[action.payload.note.id]
      return newState;
    default: 
    return state;
  }

}


export default notesReducer;