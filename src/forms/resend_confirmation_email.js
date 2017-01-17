import React from 'react'
import { reduxForm } from 'redux-form'
import Text from '../containers/Text'
import LaddaButton, { SLIDE_UP } from 'react-ladda'

const I18n = {}
I18n.t = Text.t

const ResendConfirmationEmailForm = (props) => {
  const { handleSubmit, buttonState } = props
   var headStyle = {
    textAlign: 'center'
  };
  return (
    <form onSubmit={ handleSubmit }>
      <fieldset className="form-group">
        <h3 style={headStyle}>The email Id is already present but has not been verified.</h3>
      </fieldset>

      <fieldset className="form-group form-group_btns">
        <LaddaButton
          type="submit"
          className="btn btn-primary btn-block"
          data-style={SLIDE_UP}
          loading={buttonState}>
          Resend Email
        </LaddaButton>
      </fieldset>
    </form>
  )
}

export default reduxForm({
  form: 'resendconfirmationemail'  // a unique identifier for this form
})(ResendConfirmationEmailForm)
