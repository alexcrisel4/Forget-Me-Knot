import React from 'react';
import { Link } from 'react-router-dom';

class UpdateForm extends React.Component {
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
    this.props.updateNote(note)
  }

  render() {
    return (
      <div className="">
        <form className="" onSubmit={this.handleSubmit}>
          <div className="">
            <input className="" type="text" onChange={this.update("title")} placeholder="Title" />
            <input className="" type="text" onChange={this.update("body")} placeholder="Take a note..." />
          </div>
          <button onClick={this.handleSubmit}>Update</button>
          <button onClick={this.props.deleteNote()}><i className="fa fa-trash"></i></button>
        </form>
      </div>
    )
  }
}

export default UpdateForm