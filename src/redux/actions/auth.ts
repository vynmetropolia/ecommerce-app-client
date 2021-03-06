import { Dispatch } from 'redux'

import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  User,
  UserActions,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_FAILURE,
  LOGOUT_SUCCESS,
  REQUEST_FORGOT_PASSWORD_SUCCESS,
  RESET_PASSWORD_SUCCESS,
} from '../../types'
import {
  register,
  login,
  isAuthenticated,
  logout,
  requestForgotPassword,
  resetPassword,
} from '../../api/auth'

export function registerSuccess(user: User): UserActions {
  return {
    type: REGISTER_SUCCESS,
    payload: {
      user,
    },
  }
}

export function loginSuccess(user: User): UserActions {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      user,
    },
  }
}

export function authenticateSuccessed(user: User): UserActions {
  return {
    type: AUTHENTICATE_SUCCESS,
    payload: {
      user,
    },
  }
}

export function authenticateFailed(error: string): UserActions {
  return {
    type: AUTHENTICATE_FAILURE,
    payload: {
      error,
    },
  }
}

export function logoutSuccess(): UserActions {
  return {
    type: LOGOUT_SUCCESS,
  }
}

export function requestForgotPasswordSuccess(): UserActions {
  return {
    type: REQUEST_FORGOT_PASSWORD_SUCCESS,
  }
}
export function resetPasswordSuccess(): UserActions {
  return {
    type: RESET_PASSWORD_SUCCESS,
  }
}
// Async action processed by redux-thunk middleware
export function userRegister(
  username: string,
  email: string,
  password: string,
  firstName?: string,
  lastName?: string
) {
  return async (dispatch: Dispatch) => {
    try {
      const response = await register(
        username,
        email,
        password,
        firstName,
        lastName
      )
      if (response.status === 200) {
        // handle success
        dispatch(registerSuccess(response.data))
      }
    } catch (error) {
      // handle error
      console.log(error)
      return error
    }
  }
}

export function userLogin(username: string, password: string) {
  return async (dispatch: Dispatch) => {
    try {
      const response = await login(username, password)
      if (response.status === 200) {
        // handle success
        dispatch(loginSuccess(response.data))
      }
    } catch (error) {
      // handle error
      console.log('loginError', error)
      return error
    }
  }
}
export function userAuthenticate() {
  return async (dispatch: Dispatch) => {
    try {
      const response = await isAuthenticated()
      if (response.data) {
        // handle success
        dispatch(authenticateSuccessed(response.data))
      }
      // handle failure
      if (!response.data) {
        dispatch(authenticateFailed(response))
      }
    } catch (error) {
      // handle error
      console.log(error)
      return error
    }
  }
}

export function userLogout() {
  return async (dispatch: Dispatch) => {
    try {
      const response = await logout()
      if (response.request.status === 200) {
        dispatch(logoutSuccess())
      }
    } catch (error) {
      console.log(error)
      return error
    }
  }
}

export function userRequestForgotPassword(email: string) {
  return async (dispatch: Dispatch) => {
    try {
      const response = await requestForgotPassword(email)
      if (response.request.status === 200) {
        dispatch(requestForgotPasswordSuccess())
      }
    } catch (error) {
      console.log(error)
      return error
    }
  }
}

export function userResetPassword(password: string, token: string) {
  return async (dispatch: Dispatch) => {
    try {
      const response = await resetPassword(password, token)
      if (response.request.status === 200) {
        dispatch(resetPasswordSuccess())
      }
    } catch (error) {
      console.log(error)
      return error
    }
  }
}
