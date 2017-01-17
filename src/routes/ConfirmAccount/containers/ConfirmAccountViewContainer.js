import { connect } from 'react-redux'
import ConfirmAccountView from '../components/ConfirmAccountView'
import { createPassword } from '../../../api/auth-api'

const mapDispatchToProps = {
  createPassword
}

const mapStateToProps = (state) => {
  return {
    isCreatingPassword: state.auth.isRequestingToCreatePassword
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmAccountView)
