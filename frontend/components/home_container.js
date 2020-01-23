import { connect } from 'react-redux';
import Home from './home'
import { logout } from '../actions/session_actions';

const mapStateToProps = state => {
  return ({
    errors: state.errors.session
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    logout: (user) => dispatch(logout(user)),

  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)