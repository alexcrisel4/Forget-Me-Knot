import { connect } from 'react-redux';
import Home from './home'
import { logout } from '../actions/session_actions';

const mapStateToProps = ({session}) => {
  return ({
    currentUser: session.currentUser
    
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    logout: (user) => dispatch(logout(user)),

  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)