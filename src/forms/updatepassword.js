import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Text from '../containers/Text'
import LaddaButton, { SLIDE_UP } from 'react-ladda'

const I18n = {}
I18n.t = Text.t

const UpdatePasswordForm = (props) => {
  const { handleSubmit, pristine, submitting, buttonState } = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="login-modal__password-field flex-row">
        <Field name="current_password" component="input"
               type="password" placeholder="Password" className="input-text flex" />
      </div>

      <div className="login-modal__password-field flex-row">
        <Field name="password" component="input"
               type="password" placeholder="New Password" className="input-text flex" />
      </div>

      <div className="login-modal__password-field flex-row">
        <Field name="password_confirm" component="input" type="password"
               placeholder="New password confirmation" className="input-text flex" />
      </div>

      <fieldset className="form-group form-group_btns">
        <LaddaButton
          type="submit"
          disabled={pristine || submitting}
          className="btn btn-primary btn-block"
          data-style={SLIDE_UP}
          loading={buttonState}>
          CHANGE PASSWORD
        </LaddaButton>
      </fieldset>
    </form>
  )
}

export default reduxForm({
  form: 'updatepassword'  // a unique identifier for this form
})(UpdatePasswordForm)
