import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
} from '../actions/types'

const INITIAL_STATE = {
  email: 'salame@salame.com',
  password: '',
  loading: false,
  user: null,
  error: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload }
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload }
    case LOGIN_USER:
      return { ...state, loading: true }
    case LOGIN_USER_SUCCESS:
      return { ...INITIAL_STATE, user: action.payload }
    case LOGIN_USER_FAIL:
      return { ...INITIAL_STATE, error: 'Error de autenticacion' }
    default:
      return state
  }
}
