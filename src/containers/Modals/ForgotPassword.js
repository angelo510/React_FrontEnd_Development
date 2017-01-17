import { connect } from 'react-redux'
import ForgotPassword from 'components/Modals/ForgotPassword'
import { forgotPassword } from '../../actions/auth-actions'

const mapDispatchToProps = {
  forgotPassword
}

const mapStateToProps = (state) => {
  return {
    isResetPassword: state.auth.isRequestingToResetPassword
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)
