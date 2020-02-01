import React from 'react';
import { Link } from 'react-router-dom';
import onClickOutside from 'react-onclickoutside';

class NoteForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        title: "",
        body: "",
        author_id: this.props.author_id,
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
        [field]: e.target.value
      })
    }
  }

  toggle() {
    if(this.state.open) {
      this.setState({open: false})
    } else {
      this.setState({open: true})
    }
  }

  handleClickOutside() {
    this.toggle();
  }

  handleSubmit(e) {
    e.preventDefault();
    const note =  { title: this.state.title,
                    body: this.state.body,     
                    author_id: this.state.author_id};
   
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

export default onClickOutside(NoteForm)