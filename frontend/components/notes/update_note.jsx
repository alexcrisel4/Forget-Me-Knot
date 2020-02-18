import React from 'react';
import { Link } from 'react-router-dom';

class UpdateForm extends React.Component {
  constructor(props) {
    super(props)
   this.state = {
     title: "",
     body: "",
     author_id: null,
     id: null
   }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  update(field) {

    return e => {
      e.preventDefault()
      this.setState({
        [field]: e.target.value
      })
    }
  }

  componentDidMount () {
    let note = this.props.note;
      
        this.setState( {title: note.title || "title",
          body: note.body,
          author_id: note.author_id,
          id: note.id})
  }


  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.props.updateNote(this.state).then(this.props.closeModal());
    
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteNote(this.state.id).then(this.props.closeModal());
  }

  render() {
    if(!this.state.title) return null;
    return (
      <div className="update-note-form-container">
        <form className="update-note-form" >
          <div className="update-input-box">
            <div className="inputs">
              <input className="title" type="text" onChange={this.update("title")} value={this.state.title} />
              <input className="body" type="text" onChange={this.update("body")} value={this.state.body} />
            </div>
            <div className="buttons">
              <button className="update-button"onClick={this.handleDelete}><i className="fa fa-trash"></i></button>
              <button className="update-button" onClick={this.handleSubmit}>Update</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default UpdateForm