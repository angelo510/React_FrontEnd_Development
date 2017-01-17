import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Text from '../../../containers/Text'
import { Link } from 'react-router'
import { logout } from '../../../actions/auth-actions'

const Logout = ({ logout }) =>
  <div className="navigation-link navigation-link-bordered">
    <Link onClick={logout} href="/">
      <i className="icon-logout" />
      <Text text="nav.logout" />
    </Link>
  </div>


Logout.propTypes = {
  logout: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = {
  logout
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout)
