import React from 'react';
import { Link } from 'react-router-dom';

class NoteForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formDefault: {
        title: this.props.formDefault.title,
        body: this.props.formDefault.body,
        author_id: this.props.Default.author_id,
      },
      open: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  update(field) {

    return e => {
      e.preventDefault()
      this.setState({
        formDefault: {[field]: e.target.value}
      })
    }
  }

  toggle() {
    if(this.state.open) {
      setState({open: false})
    } else {
      this.setState({open: true})
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const note = Object.assign({}, this.state.formDefault);
    console.log("submit-note")
    this.props.createNote(note)
  }

  render() {
    if(this.state.open) {
      return (
        <div className="note-form-container">
          <form className="note-form" onSubmit={this.handleSubmit}>
            <div className="input-box">
              <input className="title" type="text" onChange={this.update("title")} placeholder="Title" />
              <input className="body" type="text" onChange={this.update("body")} placeholder="Take a note..." />
            </div>
            <button className="close" onClick={this.handleSubmit}>Create</button>
          </form>
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
    
  }
}

export default NoteForm