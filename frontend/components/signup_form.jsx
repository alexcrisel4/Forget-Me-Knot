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
      this.props.history.push("/home")
  }

  update(field) {
    return e => this.setState(
      merge({}, this.state, { user: { [field]: e.target.value } })
    )
  }

  
  render() {
    return(
      // <div>
      // <h2>Welcome to Forget Me Knot</h2>
      // <form className="email-form" onSubmit={this.handleSubmit}>
       
      //   <label htmlFor="email">Email: </label>
      //   <input id="email" type="text" placeholder="email@email.com" onChange={this.update("email")} />
      //   <label htmlFor="username">Username:</label>
      //   <input id="username" type="text" placeholder="username" onChange={this.update("username")} />
      //   <label htmlFor="password">Password:</label>
      //   <input id="password" type="password" placeholder="password" onChange={this.update("password")} />
      //   <input className="next" type="submit" value="Sign Up" />
      // </form>
      // <div>Already a user?</div>
      // <Link to="/login" >Login</Link>
      // </div>
      <div className="login-form-container">
        <form className="login-form" onSubmit={this.handleSubmit}>
          <div className="logo"></div>
          <h2>Sign up</h2>
          <div>Use your Google Account</div>
          <div className="login-input-container">
            <input className="login-input" type="text" placeholder="Email" onChange={this.update("email")} />
            <input className="login-input" type="text" placeholder="Username" onChange={this.update("username")} />

            <input className="login-input" type="password" placeholder="Password" onChange={this.update("password")} />
          </div>
          <div className="login-submit-container">
            {/* <button className="login-submit" onClick={this.handleDemo} >Demo</button> */}
            <button className="login-submit next" >Next</button>
          </div>
        </form>
        <p>Already Have an account? <Link to="/login">Login</Link></p>
      </div>
    )
  }
}

    
   


export default SignupForm;
