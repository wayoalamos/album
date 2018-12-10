import firebase from '@firebase/app'
import '@firebase/auth'

import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE } from './types'

export const employeeUpdate = prop => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: prop,
  }
}

export const employeeFormAdd = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth()
  console.warn(currentUser)
  return dispatch => {
    dispatch({ type: EMPLOYEE_CREATE })
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
  }
}
