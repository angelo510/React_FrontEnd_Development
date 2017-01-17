import React from 'react'
import { connectModal } from 'redux-modal'
import { Button, Modal } from 'react-bootstrap'
import UpdatePasswordForm from 'forms/updatepassword'

const UpdatePassword = ({ show, handleHide, updatePassword, isUpdatingPassword, userId }) => (
  <Modal
    show={ show }
    onHide={ handleHide }
    backdrop={ true }
    dialogClassName='login-modal hex-modal'>
    <i className='icon-hex-close modal-close color-white' onClick={ handleHide }/>
    <Modal.Body>
      <div className='flex-col pal pam-mobile'>
        <div className='flex-row flex-hc'>
          <i className='icon-logo-playven color-primary-brand'/>
        </div>

        <UpdatePasswordForm
          onSubmit={(credentials) => {updatePassword(credentials, userId)}}
          buttonState={isUpdatingPassword}/>
      </div>
    </Modal.Body>
  </Modal>
)

export default connectModal({
  name: 'updatepassword'
})(UpdatePassword)
