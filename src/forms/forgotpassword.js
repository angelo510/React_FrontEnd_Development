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

      <div className="flex-row">
        <Field
          name="email"
          component="input"
          type="email"
          placeholder="Email"
          className="input-text flex" />
      </div>


      <fieldset className="form-group form-group_btns">
        <LaddaButton
          data-style={SLIDE_UP}
          loading={buttonState}
          type="submit"
          disabled={pristine || submitting}
          className="btn btn-primary btn-block"
          style={{height: '50px', backgroundColor: '#0e7dff', borderColor: '#0e7dff'}}>
            <Text text="modals.login.reset_password_instructions" />
        </LaddaButton>
      </fieldset>
    </form>
  )
}

export default reduxForm({
  form: 'forgotpassword'  // a unique identifier for this form
})(ForgotPasswordForm)
