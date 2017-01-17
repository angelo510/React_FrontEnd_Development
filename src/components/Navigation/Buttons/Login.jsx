import React from 'react';
import { show } from 'redux-modal'
import Text from '../../../containers/Text'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import LoginModal from '../../../containers/Modals/Login'

const Login = ({show}) => (
  <div className='navigation-link navigation-link-bordered'>
    <a href='#' onClick={ () => show('login') }>
      <i className='icon-user'/>
      <Text text='nav.login'/>
    </a>
    <LoginModal />
  </div>
)

export default connect(
  null,
  dispatch => ({
    ...bindActionCreators({
      show
    }, dispatch)
  })
)(Login)
