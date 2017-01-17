import { connect } from 'react-redux'
import Success from '../../components/Modals/Success'

const mapDispatchToProps = {
}
const mapStateToProps = state => ({
  user: state.auth.user,
  locale: state.i18n.locale
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Success)
