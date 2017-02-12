import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Text from '../containers/Text'
import LaddaButton, { SLIDE_UP } from 'react-ladda'

const ForgotPasswordForm = (props) => {
  const { handleSubmit, pristine, submitting, buttonState } = props
  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="form-group">
        <h2 style={{textAlign: 'center', color: 'white'}}><Text text="modals.login.forgot_your_password" /></h2>
      </fieldset>
  )
}

export default reduxForm({
  form: 'forgotpassword'  // a unique identifier for this form
})(ForgotPasswordForm)
