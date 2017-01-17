import { connect } from 'react-redux'
import ResendConfirmationEmail from 'components/Modals/ResendConfirmationEmail'
import { resendConfirmationEmail } from '../../actions/auth-actions'

const mapDispatchToProps = {
  resendConfirmationEmail
}

const mapStateToProps = (state) => {
  return {
    isRequestingToResend: state.auth.isRequestingToResendConfirmation
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResendConfirmationEmail)
