import React from 'react';
import { merge } from 'lodash';
import { Link } from 'react-router-dom';
class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: "",
        email: "",
        password: "",
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {

    e.preventDefault();
      const user = Object.assign({}, this.state.user);
      this.props.processForm(user);
  }

  update(field) {
    return e => this.setState(
      merge({}, this.state, { user: { [field]: e.target.value } })
    )
  }

  
  render() {
    return(
      <div>
      <h2>Welcome to Forget Me Knot</h2>
      <form className="email-form" onSubmit={this.handleSubmit}>
       
        <label HTMLfor="email">Email: </label>
        <input id="email" type="text" placeholder="email@email.com" onChange={this.update("email")} />
        <label HTMLfor="username">Username:</label>
        <input id="username" type="text" placeholder="username" onChange={this.update("username")} />
        <label HTMLfor="password">Password:</label>
        <input id="password" type="password" placeholder="password" onChange={this.update("password")} />
        <input className="next" type="submit" value="Sign Up" />
      </form>
      </div>
    )
  }
}

    
   


export default SignupForm;
