import { connect } from 'react-redux'
import Header from '../components/Header'

const mapStateToProps = (state) => ({
  firstName: state.auth.user.first_name,
  lastName: state.auth.user.last_name
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
