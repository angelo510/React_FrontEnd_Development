import React from 'react'
import { connectModal } from 'redux-modal'
import { Modal } from 'react-bootstrap'
import ResendConfirmationEmailForm from 'forms/resend_confirmation_email'

export class ResendConfirmationEmail extends React.Component {
  constructor(props) {
    super(props);
  }

  renderCloseIcon (handleHide) {
    return (
      <button className='close' onClick={ handleHide }>
          <span>
            <i className="modal__close"/>
          </span>
      </button>
    )
  }

  renderModalLogo () {
    return (
      <div className="modal__header modal__header_login">
        <div className="modal__logo"></div>
      </div>
    )
  }

  render() {
    const { show, handleHide, resendConfirmationEmail, email, isRequestingToResend } = this.props
    const emailObj = {
      "user": {
        "email":email
      }}

    return (
      <Modal
        show={ show }
        onHide={ handleHide }
        backdrop={ true }
        dialogClassName="login-modal hex-modal">
        <i className='icon-hex-close modal-close color-white' onClick={ handleHide }/>
        <Modal.Body>
          <div className='flex-col pal pam-mobile'>
            <div className='flex-row flex-hc'>
              <i className='icon-logo-playven color-primary-brand'/>
            </div>
            <ResendConfirmationEmailForm onSubmit={()=>{resendConfirmationEmail(emailObj)}} buttonState={isRequestingToResend}/>
          </div>
        </Modal.Body>
      </Modal>
    )
  }
}

/*<Modal
 show={ show }
 onHide={ handleHide }
 backdrop={ true }
 className="modal_dark modal_center"
 dialogClassName="modal-background-fix">
 <div className="modal__container">
 { this.renderCloseIcon(handleHide) }
 { this.renderModalLogo() }
 <div className="modal__content">
 <ResendConfirmationEmailForm onSubmit={()=>{resendConfirmationEmail(emailObj)}} buttonState={isRequestingToResend}/>
 </div>
 </div>
 </Modal>*/

export default connectModal({
  name: 'resendconfirmationemail'
})(ResendConfirmationEmail)

