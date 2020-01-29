import React from 'react';
import { Link } from 'react-router-dom';

class NoteForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.formDefault;

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  update(field) {

    return e => {
      e.preventDefault()
      this.setState({
        [field]: e.target.value
      })
    }
  }


  handleSubmit(e) {
    e.preventDefault;
   
    const note = Object.assign({}, this.state);
    this.props.createNote(note)
  }

  render() {
    return(
      <div className="note-form-container">
        <form className="note-form" onSubmit={this.handleSubmit}>
          <div className="input-box">
            <input className ="title" type="text" onChange={this.update("title")} placeholder="Title" />
            <input className="body" type="text" onChange={this.update("body")} placeholder="Take a note..." />
          </div>
          <button className="close" onClick={this.handleSubmit}>Close</button>
        </form>
      </div>
    )
  }
}

export default NoteForm