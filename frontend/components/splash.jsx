import React from 'react';
import { Link } from 'react-router-dom';


const Splash = props => {
  return (
    <div className="splash-container">
        <h1>Welcome to Forget Me Knot</h1>
        <div>Take note and you won't forget</div>
        <Link to="/signup">Sign Up</Link>
        <div>Already have an account?</div>
        <Link to="/login">Login</Link>
    </div>
  )
}

export default Splash