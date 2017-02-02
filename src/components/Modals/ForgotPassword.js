import React from 'react'
import { connectModal } from 'redux-modal'
import { Button, Modal } from 'react-bootstrap'
import ForgotPasswordForm from 'forms/forgotpassword'

const ForgotPassword = ({ show, handleHide, forgotPassword, onSuccess, isResetPassword }) => (
  <Modal
    show={ show }
    onHide={ handleHide }
    backdrop={ true }
    dialogClassName="login-modal hex-modal">
    <i className='icon-hex-close modal-close color-white' onClick={ handleHide }/>
    <Modal.Body>
      <div className="flex-col pal pam-mobile">
        <div className='flex-row flex-hc'>
          <i className='icon-logo-mywebsite color-primary-brand'/>
        </div>
        <ForgotPasswordForm onSubmit={credentials => {forgotPassword(credentials)}} buttonState={isResetPassword}/>
      </div>
    </Modal.Body>
  </Modal>
)

export default connectModal({
  name: 'forgotpassword'
})(ForgotPassword)
