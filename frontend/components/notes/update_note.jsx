import React from 'react';
import { Link } from 'react-router-dom';

class UpdateForm extends React.Component {
  constructor(props) {
    super(props)
   this.state = {
     title: false,
     body: false,
     author_id: this.props.note.author_id,
     id: this.props.note.id
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
    this.props.fetchNote(this.props.match.params.noteId)
    .then((note) => {
      console.log(note);
        this.setState( {title: note.payload.note.title,
          body: note.payload.note.body,
          author_id: note.payload.note.author_id,
          id: note.payload.note.id})
    })
    console.log(this.state);
  }


  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.props.updateNote(this.state).then(this.props.history.push(`/home`))
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteNote(this.props.match.params.noteId).then(this.props.history.push('/home'))
  }

  render() {
    if(!this.state.title) return null;
    return (
      <div className="">
        <form className="" >
          <div className="">
            <input className="" type="text" onChange={this.update("title")} value={this.state.title} />
            <input className="" type="text" onChange={this.update("body")} value={this.state.body} />
          </div>
          <button onClick={this.handleSubmit}>Update</button>
          <button onClick={this.handleDelete}><i className="fa fa-trash"></i></button>
        </form>
      </div>
    )
  }
}

export default UpdateForm