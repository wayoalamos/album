import firebase from '@firebase/app'
import '@firebase/auth'
import '@firebase/database'
import { Actions } from 'react-native-router-flux'

import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS,
} from './types'

export const employeeUpdate = prop => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: prop,
  }
}

export const employeeFormAdd = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth()
  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE })
        Actions.employeeList()
      })
  }
}

export const fetchEmployee = employeeList => {
  return dispatch => {
    dispatch({
      type: EMPLOYEES_FETCH_SUCCESS,
      payload: employeeList,
    })
  }
}
