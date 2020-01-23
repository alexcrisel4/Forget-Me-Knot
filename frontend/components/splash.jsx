import React from 'react';
import { Link } from 'react-router-dom';
// import { } from '../../app/assets/stylesheets/api/splash'


const Splash = props => {
  return (


    <div>
        <h1>Welcome to Forget Me Knot</h1>
        <div className="splash-container">
        <div className ="signup-note">
          <div>Take note and you won't forget</div>
          <Link to="/signup">Sign Up</Link>
      </div>
        <div className="login-note">
          <div>Already have an account?</div>
          <Link to="/login">Login</Link>
        </div>
        
      </div>
    </div>
  )
}

export default Splash