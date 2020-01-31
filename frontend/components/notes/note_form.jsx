import React from 'react';
import { Link } from 'react-router-dom';
import OffClick from 'react-offclick';

class NoteForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formDefault: {
        title: this.props.formDefault.title,
        body: this.props.formDefault.body,
        author_id: this.props.formDefault.author_id
      },
      open: false
    };
    this.getOutput = this.getOutput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggle = this.toggle.bind(this);
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
    console.log(this.state.open)
    if(this.state.open) {
      this.setState({open: false})
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

  getOutput() {
    let output
    if (this.state.open) {
      output = (<div className="input-box" >
          <input className="title" type="text" onChange={this.update("title")} placeholder="Title" />
          <input className="body" type="text" onChange={this.update("body")} placeholder="Take a note..." />
          <div className="button-container">
          
          <button className="close" onClick={this.handleSubmit}>Create</button>
          </div>
        </div>
      )
    } else {
      output = (<div className="input-box">
        <input onFocus={this.toggle} className="body" type="text" onChange={this.update("body")} placeholder="Take a note..." />
      </div>)
    }
    return output;
  }



   

  render() {
    
    return (
      <div   className="note-form-container">
        <form className="note-form" onSubmit={this.handleSubmit}>
          <div>{this.getOutput()}</div>
        </form>
      </div>
      
    )
  }

  
  
}

export default NoteForm