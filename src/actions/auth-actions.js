import * as types from './action-types'
//login
export const LOGIN_SUCCESS = types.LOGIN_SUCCESS
export const LOGIN_FAIL = types.LOGIN_FAIL
export const ON_AUTH_INPUT_CHANGE = types.ON_AUTH_INPUT_CHANGE

//forgot password
export const FORGOT_PASSWORD_REQUEST = types.FORGOT_PASSWORD_REQUEST
export const FORGOT_PASSWORD_SUCCESS = types.FORGOT_PASSWORD_SUCCESS
export const FORGOT_PASSWORD_FAIL = types.FORGOT_PASSWORD_FAIL
//register
export const REGISTER_SUCCESS = types.REGISTER_SUCCESS
export const REGISTER_FAIL = types.REGISTER_FAIL
export const ON_REGISTER_INPUT_CHANGE = types.ON_REGISTER_INPUT_CHANGE
//create password
export const CREATE_PASSWORD_REQUEST = types.CREATE_PASSWORD_REQUEST
export const CREATE_PASSWORD_SUCCESS = types.CREATE_PASSWORD_SUCCESS
export const CREATE_PASSWORD_FAIL = types.CREATE_PASSWORD_FAIL

//resend confirmation
export const RESEND_CONFIRMATION_REQUEST = types.RESEND_CONFIRMATION_REQUEST
export const RESEND_CONFIRMATION_SUCCESS = types.RESEND_CONFIRMATION_SUCCESS
export const RESEND_CONFIRMATION_FAIL = types.RESEND_CONFIRMATION_FAIL

//edit
export const ON_EDIT_INPUT_CHANGE = types.ON_EDIT_INPUT_CHANGE

//edit profile
export const EDIT_PROFILE_REQUEST = types.EDIT_PROFILE_REQUEST
export const EDIT_PROFILE_SUCCESS = types.EDIT_PROFILE_SUCCESS
export const EDIT_PROFILE_FAIL = types.EDIT_PROFILE_FAIL

//logout
export const LOG_OUT = 'LOG_OUT'
//update password
export const TOGGLE_PASSWORD_UPDATE = types.TOGGLE_PASSWORD_UPDATE

export function onLoginSuccess (user) {
  return {
    user: user,
    type: types.LOGIN_SUCCESS
  }
}

export function onLoginFail (reason) {
  return {
    reason: reason,
    type: types.LOGIN_FAIL
  }
}

export function onRegisterFail (reason) {
  return {
    reason: reason,
    type: types.REGISTER_FAIL
  }}

export function onRegisterSuccess (user) {
  return {
    user: user,
    type: types.REGISTER_SUCCESS
  }
}

export function onChange (e, type=types.ON_AUTH_INPUT_CHANGE) {
  return {
    input: {
      name: e.target.name,
      value: e.target.value
    },
    type: type
  }
}

export function onCreatePasswordRequest () {
  return {
    type: types.CREATE_PASSWORD_REQUEST
  }
}

export function onCreatePasswordSuccess (successMessage, user) {
  return {
    type: types.CREATE_PASSWORD_SUCCESS,
    message: successMessage,
    user: user
  }
}

export function onCreatePasswordFail (errorMessage) {
  return {
    type: types.CREATE_PASSWORD_FAIL,
    reason: errorMessage
  }
}

export function onLogout () {
  return {
    type: types.LOG_OUT
  }
}

export function onForgotPasswordRequest () {
  return {
    type: types.FORGOT_PASSWORD_REQUEST
  }
}

export function onForgotPasswordSuccess (successMessage) {
  return {
    type: types.FORGOT_PASSWORD_SUCCESS,
    message: successMessage
  }
}

export function onForgotPasswordFail (errorMessage) {
  return {
    type: types.FORGOT_PASSWORD_FAIL,
    reason: errorMessage
  }
}

export function onEditProfileRequest () {
  return {
    type: types.EDIT_PROFILE_REQUEST
  }
}

export function onEditProfileSuccess ({ message, user }) {
  return {
    type: types.EDIT_PROFILE_SUCCESS,
    message,
    user
  }
}

export function onEditProfileFail (errorMessage) {
  return {
    type: types.EDIT_PROFILE_FAIL,
    reason: errorMessage
  }
}


export function togglePasswordUpdate() {
  return {
    type: TOGGLE_PASSWORD_UPDATE,
  }
}

export function onResendconfirmationRequest () {
  return {
    type: types.RESEND_CONFIRMATION_REQUEST
  }
}

export function onResendConfirmationSuccess (successMessage) {
  return {
    type: types.RESEND_CONFIRMATION_SUCCESS,
    message: successMessage
  }
}

export function onResendConfirmationFail (errorMessage) {
  return {
    type: types.RESEND_CONFIRMATION_FAIL,
    reason: errorMessage
  }
}

/****************************************
*     Export api functions.             *
* Kept separate to have code integrity  *
****************************************/

export {
  login,
  logout,
  register,
  update,
  forgotPassword,
  updatePassword,
  createPassword,
  resendConfirmationEmail
 } from '../api/auth-api'
