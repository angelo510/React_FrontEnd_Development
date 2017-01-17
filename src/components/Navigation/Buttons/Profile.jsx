import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

const Profile = ({firstName, id}) => (
  <div className='navigation-link'>
    <Link to={`/profile`}>
      <i className='icon-user'/>
      <span>{ firstName }</span>
    </Link>
  </div>
)

const mapDispatchToProps = {
}

const mapStateToProps = (state) => ({
  firstName: state.auth.user.first_name,
  id: state.auth.user.id,
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
