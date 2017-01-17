import { connect } from 'react-redux'
import { Navigation } from '../../components/Navigation'

const mapStateToProps = (state) => {
  return {
    auth: state.auth.authenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation)
