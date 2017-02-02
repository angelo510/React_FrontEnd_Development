import React, { Component, PropTypes } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { connectModal } from 'redux-modal'
import Text from '../../containers/Text'
import LoginForm from '../../forms/login'

const Login = ({show, onChange, handleHide, facebookLogin, login, register, open, error, showModal, hideModal, onSuccess}) => (
  <Modal dialogClassName='login-modal hex-modal'
         show={ show }
         onHide={ handleHide }
         backdrop={ true }>
    <i className='icon-hex-close modal-close color-white' onClick={ handleHide }/>
    <Modal.Body>
      <div className='flex-col pal pam-mobile'>
        <div className='flex-row flex-hc'>
          <i className='icon-logo-mywebsite color-primary-brand'/>
        </div>

        <LoginForm onSubmit={ credentials => login({ credentials, onSuccess })}
                   onForgotPassword={() => hideModal('login') && showModal('forgotpassword') } />

        <div className='flex-row flex-hc t5 mtm'>
          <div className='color-white mrt'>
            <Text text="modals.login.signup_message"/>
          </div>
          <div>
            <a className='blue-link'
               onClick={() => hideModal('login') && showModal('register')}>
              <Text text="modals.login.signup" />
            </a>
          </div>
        </div>
      </div>
    </Modal.Body>
  </Modal>
)

export default connectModal({
  name: 'login'
})(Login)
