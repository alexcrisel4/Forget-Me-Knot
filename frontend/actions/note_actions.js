import * as APIUtil from '../util/note_api_util';

export const RECEIVE_NOTES = "RECEIVE_NOTES";
export const RECEIVE_NOTE = "RECEIVE_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE"


export const receiveNotes = notes => ({
  type: RECEIVE_NOTES,
  notes
})

export const receiveNote = payload => ({
  type: RECEIVE_NOTE,
  payload
})

export const removeNote = payload => ({
  type: REMOVE_NOTE,
  payload
})


export const fetchNotes = () => dispatch => (
  APIUtil.fetchNotes().then(notes => dispatch(receiveNotes(notes)))
)

export const fetchNote = (id) => dispatch => (
  APIUtil.fetchNote(id).then(note => dispatch(receiveNote(note)))
)

export const createNote = (note) => dispatch => (
  APIUtil.createNote(note).then(note => dispatch(receiveNote(note)))
)

export const updateNote = (note) => dispatch => (
  APIUtil.updateNote(note).then(note => dispatch(receiveNote(note)))
)

export const deleteNote = (id) => dispatch => (
  APIUtil.deleteNote(id).then(note => dispatch(removeNote(note)))
)