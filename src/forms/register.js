import React from 'react'
import {Field, FormSection, reduxForm} from 'redux-form'
import Text from '../containers/Text'

const RegistrationForm = (props) => {
  const {handleSubmit, pristine, reset, submitting, facebookLogin} = props
  return (
    <form onSubmit={handleSubmit}>
      <FormSection name='user'>
        <div className='flex-row flex-col-mobile'>
          <Field type='text'
                 name='first_name'
                 className='input-text flex'
                 component='input'
                 placeholder='First Name'/>

          <Field type='text'
                 name='last_name'
                 className='input-text flex'
                 component='input'
                 placeholder='Last Name'/>
        </div>

        <div className='flex-row'>
          <Field type='email'
                 name='email'
                 className='input-text flex'
                 component='input'
                 placeholder='Email'/>
        </div>

        <div className='flex-row'>
          <Field type='password'
                 name='password'
                 className='input-text flex'
                 component='input'
                 placeholder='Password'/>
        </div>

        <div className='flex-row'>
          <Field type='password'
                 className='input-text flex'
                 name='password_confirmation'
                 component='input'
                 placeholder='Password Confirmation'/>
        </div>
      </FormSection>

      <div className='login-modal__buttons flex-row flex-col-mobile mts'>
        <a className='login-modal__facebook-button flex pl-btn-dark color-bd-primary-brand'
           href='omniauth/facebook'>
          <i className='icon-facebook mrt'/>
          <Text text='modals.signup.facebook'/>
          <div className='login-modal__buttons-divider'>
            <Text text='modals.signup.or'/>
          </div>
        </a>
        <button type='submit' className='login-modal__login-button flex pl-btn-primary'
                disabled={pristine || submitting}>
          <Text text='modals.signup.signup'/>
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'register'  // a unique identifier for this form
})(RegistrationForm)
