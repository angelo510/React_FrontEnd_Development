import axios from 'axios'
import { hide, show } from 'redux-modal'
import api_endpoints from '../../config/apis'
import setAuthorizationToken from './utils/set-authorization-token'
import jwt from 'jsonwebtoken'
import toastr from 'toastr'
import { change } from 'redux-form'
import { browserHistory } from 'react-router'
import Text from '../containers/Text'
import {
  onLoginSuccess,
  onLoginFail,
  onRegisterFail,
  onRegisterSuccess,
  onResendconfirmationRequest,
  onResendConfirmationSuccess,
  onResendConfirmationFail,
  onForgotPasswordRequest,
  onForgotPasswordSuccess,
  onForgotPasswordFail,
  onLogout,
  onCreatePasswordRequest,
  onCreatePasswordSuccess,
  onCreatePasswordFail,
  onEditProfileRequest,
  onEditProfileSuccess,
  onEditProfileFail,
  togglePasswordUpdate
} from '../actions/auth-actions'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

//TODO: move dispatches to 'actions' and keep only ajax calls here

// Auth.configure({
//   apiUrl: 'https://dev.mywebsite.com/api',
//   authProviderPaths: {
//     facebook: '/auth/facebook'
//   },
// })
//Todo error handling
//Todo set token as default header
//Todo move update, updatePassword to profile-api

export function login(params) {
  return (dispatch, getState) => {
    const state = getState()
    const { credentials, onSuccess } = params;
    const confirmationModalProps = {
      "email": credentials.email
    }

    return axios({
      method: 'POST',
      url: `${api_endpoints.mywebsite}/authenticate`,
      params: credentials
    }).then(res => {
      const token = res.data.auth_token
      localStorage.setItem('authToken', token)
      setAuthorizationToken(token)
      dispatch(onLoginSuccess(jwt.decode(token)))
      dispatch(hide('login'))
      if (onSuccess && typeof(onSuccess) === 'string') {
        dispatch(show(onSuccess))
      }
    })
    .catch(error => {
      let errorMessages = ''
      if (error.response && error.response.status === 401) {
        errorMessages = error.response.data.errors.join(', ')
        toastr.error(errorMessages)
        dispatch(onLoginFail(error.response.data.errors.join(', ')))
      }
      else if(error.response && error.response.status === 422) {
        let errorResp = ''
        try {
          errorResp = error.response.data.error
        } catch (e) {
          // pass
        }
        if (errorResp === 'unconfirmed_account') {
          dispatch(hide('login'))
          dispatch(show('resendconfirmationemail', confirmationModalProps))
        }
        else {
          toastr.error(error.response.data.message)
        }
      }
      else {
        // Something happened in setting up the request that triggered an Error
        toastr.error(error.message)
        dispatch(onLoginFail(error.message))
      }
    });
  }
}

export function logout() {
  return (dispatch) => {
    localStorage.removeItem('authToken')
    setAuthorizationToken()
    dispatch(onLogout())
  }
}

export function register(paramsOrModal) {
  return (dispatch, getState) => {
    const state = getState()
    const { credentials, onSuccess } = paramsOrModal
    const confirmationModalProps = {
      "email": credentials.user.email
    }

    return axios({
      method: 'POST',
      url: `${api_endpoints.mywebsite}/users`,
      data: credentials
    }).then(res => {
      const token = res.data.auth_token
      localStorage.setItem('authToken', token)
      setAuthorizationToken(token)
      dispatch(onRegisterSuccess(jwt.decode(token)))
      dispatch(hide('register'))
      if (onSuccess && typeof(onSuccess) === 'string') {
        dispatch(show(onSuccess))
      }
    })
    .catch(error => {
      let errorMessages = ''
      if (error.response && error.response.status === 422) {
        let errorResp = ''
        try {
          errorResp = error.response.data.error
        } catch (e) {
          // pass
          console.log(e)
        }
        if (errorResp === 'unconfirmed_account') {
          dispatch(hide('register'))
          dispatch(show('resendconfirmationemail', confirmationModalProps))
        }
        else {
          toastr.error(error.response.data.message)
        }
      } else {
        // Something happened in setting up the request that triggered an Error
        errorMessages = error.message
        toastr.error(errorMessages)
      }

      dispatch(onRegisterFail(errorMessages))
    })
  }
}

export const update = (credentials, userId) => {
  return (dispatch, getState) => {
    for (let propName in credentials) {
      if (credentials[propName] === null || credentials[propName] === undefined) {
        delete credentials[propName];
      }
    }

    const reqBody = {
      "user": credentials
    }

    dispatch(onEditProfileRequest())

    return axios({
      method: 'PUT',
      url: `${api_endpoints.mywebsite}/users/` + userId,
      data: reqBody
    }).then(res => {
      if (res.status == 200) {
        dispatch(onEditProfileSuccess(res.data))
        const state = getState()
        toastr.success(state.auth.messages.message)
      }
      else {
        dispatch(onEditProfileFail(res.data.message))
        const state = getState()
        toastr.error(state.auth.messages.reason)
      }
    }).catch(error => {
      let errorMessages = ''
      if (error.response && error.response.status === 422) {
        errorMessages = error.response.data.errors.join(', ')
      } else {
        // Something happened in setting up the request that triggered an Error
        errorMessages = error.message
      }

      dispatch(onEditProfileFail(errorMessages))
      toastr.error(errorMessages)
    })

  }
}

export function forgotPassword(params) {
  return (dispatch, getState) => {
    dispatch(onForgotPasswordRequest())
    return axios({
      method: 'POST',
      url: `${api_endpoints.mywebsite}/users/reset_password`,
      data: params
    }).then(res => {
      if(res.status==200) {
        dispatch(onForgotPasswordSuccess(res.data.message))
        const state = getState()
        toastr.success(state.auth.messages.message)
      } else {
        dispatch(onForgotPasswordFail(res.data.message))
        const state = getState()
        toastr.error(state.auth.messages.reason)
      }

    })
      .catch(error => {
        let errorMessages = ''
        if (error.response && error.response.status === 422) {
          errorMessages = error.response.data.errors.join(', ')
        } else {
          // Something happened in setting up the request that triggered an Error
          errorMessages = error.message
        }

        toastr.error(errorMessages)
      })
  }
}

export function updatePassword(credentials, userId) {
  return (dispatch, getState) => {
    if (!credentials.current_password) {
      toastr.error(Text.t('messages.errors.enter_current_password'));
      return false;
    }

    if (!credentials.password || !credentials.password_confirm) {
      toastr.error(Text.t('messages.errors.fill_all_fields'));
      return false;
    }

    if (credentials.password !== credentials.password_confirm) {
      dispatch(change('updatepassword', 'password', ''))
      dispatch(change('updatepassword', 'password_confirm', ''))
      toastr.error(Text.t('messages.errors.password_mismatch'))
      return false;
    }

    if (credentials.password.length < 8 || credentials.password_confirm.length < 8) {
      toastr.error(Text.t('messages.errors.short_password'));
      return false;
    }

    const reqBody = {
      user: {
        current_password: credentials.current_password,
        password: credentials.password,
        password_confirmation: credentials.password_confirm
      }
    }
    dispatch(togglePasswordUpdate())

    return axios({
      method: 'PUT',
      url: `${api_endpoints.mywebsite}/users/` + userId,
      data: reqBody
    }).then(res => {
      dispatch(togglePasswordUpdate())
      dispatch(hide('updatepassword'))
      toastr.success(res.data.message)
    }).catch(error => {
      dispatch(togglePasswordUpdate())
      toastr.error(error.response.data.message.join(', '))
    })
  }
}

export function resendConfirmationEmail(emailObj) {
  return(dispatch, getState) => {
    dispatch(onResendconfirmationRequest())

    return axios({
      method: 'POST',
      url: `${api_endpoints.mywebsite}/users/confirm_account_email`,
      data: emailObj
    }).then(res => {
      if(res.status==200) {
        dispatch(onResendConfirmationSuccess(res.data.message))
        const state = getState()
        toastr.success(state.auth.messages.message)
      } else {
        dispatch(onResendConfirmationFail(res.data.message))
        const state = getState()
        toastr.error(state.auth.messages.reason)
      }
    })
      .catch(error => {
        let errorMessages = ''
        if (error.response && error.response.status === 422) {
          errorMessages = error.response.data.errors.join(', ')
        } else {
          // Something happened in setting up the request that triggered an Error
          errorMessages = error.message
        }

        toastr.error(errorMessages)
      })
  }
}

export function createPassword (credentials, location) {
  return (dispatch, getState) => {
    if (credentials.password !== credentials.password_confirm) {
      dispatch(change('confirmpassword', 'password', ''))
      dispatch(change('confirmpassword', 'password_confirm', ''))
      toastr.error('Password mismatch')
      return
    }
    credentials.confirmation_token = location.query.confirmation_token
    const reqBody = {
      "user": credentials
    }

    dispatch(onCreatePasswordRequest())
    return axios({
      method: 'POST',
      url: `${api_endpoints.mywebsite}/users/confirm_account`,
      data: reqBody
    }).then(res => {
      if(res.status==200) {
        const token = res.data.auth_token
        console.log(token)
        localStorage.setItem('authToken', token)
        setAuthorizationToken(token)
        dispatch(onCreatePasswordSuccess(res.data.message, jwt.decode(token)))
        const state = getState()
        toastr.success(state.auth.messages.message)
        browserHistory.push('/')
      } else {
        dispatch(onCreatePasswordFail(res.data.message))
        const state = getState()
        toastr.error(state.auth.messages.reason)
      }

    })
      .catch(error => {
        let errorMessages = ''
        if (error.response && error.response.status === 422) {
          errorMessages = error.response.data.message
        } else {
          // Something happened in setting up the request that triggered an Error
          errorMessages = error.message
        }

        dispatch(onCreatePasswordFail(errorMessages))
        toastr.error(errorMessages)
      })
  }
}
