import { connect } from 'react-redux';
import Home from './home'
import { logout } from '../actions/session_actions';

const mapStateToProps = state => {
  return ({
    currentUser: state.entities.users.username
    // currentUser: session.currentUser
    
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    logout: (user) => dispatch(logout(user)),

  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)