import { connect } from 'react-redux'
import UpdatePassword from '../../components/Modals/UpdatePassword'
import { updatePassword } from '../../api/auth-api'

const mapDispatchToProps = {
  updatePassword
}

const mapStateToProps = (state) => {
  return {
    isUpdatingPassword: state.auth.isRequestingToUpdatePassword,
    userId: state.auth.user.id
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePassword)
