import React from 'react'
import ConfirmPasswordForm from '../../../forms/confirmpassword'

/*const ConfirmAccount = (props) => {
  const { createPassword } = props
  return (
    <div>
      <ConfirmPasswordModal/>

      <div className="modal_dark modal_center" style={{display : "block"}}>
        <div className="modal-background-fix modal-dialog">
          <div className="modal-content" role="document">
            <div className="modal__container">
              <div className="modal__header modal__header_login">
                <h3 style={{color:"white"}}>TERVETULOA PLAYVENIIN! LUO UUSI SALASANA TURVATAKSESI TILISI</h3>
              </div>
              <div className="modal__content">
                <ConfirmPasswordForm onSubmit={() => {createPassword()}}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}*/

export class ConfirmAccountView extends React.Component {
  constructor (props) {
    super (props)
  }

  render () {
    const { createPassword, isCreatingPassword, location} = this.props
    return (
      <div>
        <div style={{display : "block"}}>
          <div className="login-modal hex-modal modal-dialog">
            <div className="modal-content" role="document">
              <div className="modal-body">
                <div className="flex-col pal pam-mobile">
                  <h3 style={{color:"white"}}>TERVETULOA PLAYVENIIN! LUO UUSI SALASANA TURVATAKSESI TILISI</h3>
                  <ConfirmPasswordForm
                    onSubmit={(credentials) => {createPassword(credentials, location)}}
                    buttonState={isCreatingPassword} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ConfirmAccountView
