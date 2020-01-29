import React from 'react';
import { Link } from 'react-router-dom'


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDemo = this.handleDemo.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault;
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    this.props.history.push("/home")
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    })
  }
  handleDemo(e) {
    e.preventDefault;
    let user = {
      email: "demo@demouser.com",
      username: "demouser",
      password: "demouser"
    }
    this.props.processForm(user);
    

  }

  render() {
    return (
      <div className="login-form-container">
        <form className="login-form" onSubmit={this.handleSubmit}>
          
          <div className="logo"></div>
          <h2>Sign in</h2>
          <div>Use your Google Account</div>
          <div className="login-input-container">
            <input className="login-input" type="text" placeholder="Email" onChange={this.update("email")} />
            <input className="login-input" type="text" placeholder="Username" onChange={this.update("username")} />
            <input className="login-input" type="password" placeholder="Password" onChange={this.update("password")} />
          </div>
          <div className="login-submit-container">
            <button className="login-submit" onClick={this.handleDemo} >Demo</button>
            <button className="login-submit next" >Next</button>
            
          {/* <input className="login-submit" type="submit" value="Next" />
          <input className="login-submit" type="submit" onClick={this.handleDemo} value="DEMO LOGIN" /> */}
          </div>
        </form>
        <p>Don't have an account? <Link to="/signup">Create account</Link></p>
      </div>
    )
  }
}

export default LoginForm;
