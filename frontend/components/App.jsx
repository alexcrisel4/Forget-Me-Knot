import React from "react";
import SignupContainer from './signup_container';
import LoginContainer from './login_container';
import Splash from './splash'
import { Route, Switch}  from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="app-container">
    <header>
      
    </header>
    <Switch>
      <Route exact path="/" component={Splash} />
      <AuthRoute path="/login" component={LoginContainer} />
      <AuthRoute path="/signup" component={SignupContainer} />
    </Switch>
  
  </div>
);

export default App;