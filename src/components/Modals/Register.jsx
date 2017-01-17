import React, { Component, PropTypes } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { connectModal } from 'redux-modal'
import Text from '../../containers/Text'
import RegistrationForm from '../../forms/register'

const Register = ({show, onChange, handleHide, facebookLogin, register, open, onSuccess}) => (
  <Modal dialogClassName='login-modal hex-modal'
         show={ show }
         onHide={ handleHide }
         backdrop={ true }>
    <i className='icon-hex-close modal-close color-white' onClick={ handleHide }/>
    <Modal.Body>
      <div className='flex-col pal pam-mobile'>
        <div className='flex-row flex-hc'>
          <i className='icon-logo-playven color-primary-brand'/>
        </div>

        <RegistrationForm onSubmit={credentials => register({credentials, onSuccess})}/>
      </div>
    </Modal.Body>
  </Modal>
)

export default connectModal({
  name: 'register'
})(Register)
