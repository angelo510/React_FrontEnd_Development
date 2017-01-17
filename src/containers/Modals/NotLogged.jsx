import { connect } from 'react-redux'
import NotLogged from '../../components/Modals/NotLogged'
import { login, onChange } from '../../actions/auth-actions'
import { show } from 'redux-modal'


const mapDispatchToProps = {
  openModal: show,
  login,
  onChange
}
const mapStateToProps = state => ({
  locale: state.i18n.locale
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotLogged)
