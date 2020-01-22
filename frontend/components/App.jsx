import React from "react";
import SignupContainer from './signup_container'
import Route from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <h1>Forget Me Knot</h1>
    </header>
    <Route path="/signup" component={SignupContainer} />
  </div>
);

export default App;