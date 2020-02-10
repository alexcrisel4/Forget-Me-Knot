import React from "react";
import SignupContainer from './signup_container';
import LoginContainer from './login_container';
import Splash from './splash'
import { Route, Switch}  from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HomeContainer from './home_container';
import UpdateContainer from './notes/update_note_container'
import Modal from './modal';

const App = () => (
  <div className="app-container">
    <header>
      
    </header>
      <Route exact path="/" component={SignupContainer} />
      <AuthRoute path="/login" component={LoginContainer} />
      <AuthRoute path="/signup" component={SignupContainer} />
      
    <Switch>
      <ProtectedRoute path="/home" component={HomeContainer} />
      <ProtectedRoute  path="/notes/:noteId" component={UpdateContainer}/>
    </Switch>
    <Modal />
  </div>
);

export default App;