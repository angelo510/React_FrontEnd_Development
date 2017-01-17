import React from 'react'
import {Field, reduxForm} from 'redux-form'
import Text from '../containers/Text'

const LoginForm = (props) => {
  const {handleSubmit, pristine, reset, submitting, facebookLogin, onForgotPassword} = props
  return (
    <form onSubmit={handleSubmit}>
      <div className='flex-row'>
        <Field type='email'
               name='email'
               className='input-text flex'
               component='input'
               placeholder='Email'/>
      </div>

      <div className='login-modal__password-field flex-row'>
        <Field type='password'
               name='password'
               className='input-text flex'
               component='input'
               placeholder='Password'/>

        <span className='login-modal__forgot-password t5'>
            <a href="#" onClick={onForgotPassword}>
              <Text text='modals.login.forgot_password'/>
            </a>
          </span>
      </div>

      <div className='login-modal__buttons flex-row flex-col-mobile mts'>
        <button className='login-modal__facebook-button flex pl-btn-dark color-bd-primary-brand'
                onClick={ facebookLogin }>
          <i className='icon-facebook mrt'/>
          <Text text='modals.login.login_fb'/>
          <div className='login-modal__buttons-divider'>
            <Text text='modals.login.or'/>
          </div>
        </button>

        <button type='submit'
                className='login-modal__login-button flex pl-btn-primary'
                disabled={pristine || submitting}>
          <Text text='modals.login.login'/>
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'login'  // a unique identifier for this form
})(LoginForm)
