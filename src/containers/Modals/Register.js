import { connect } from 'react-redux'
import Register from '../../components/Modals/Register'
import {
  register,
  onChange,
  ON_REGISTER_INPUT_CHANGE
} from '../../actions/auth-actions'

const mapDispatchToProps = {
  register,
  onChange: (e) => onChange(e, ON_REGISTER_INPUT_CHANGE)
}
const mapStateToProps = state => ({
  error: state.auth.messages,
  locale: state.i18n.locale
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)
