import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE } from './types'

export const employeeUpdate = prop => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: prop,
  }
}

export const employeeFormAdd = prop => {
  return {
    type: EMPLOYEE_CREATE,
    payload: prop,
  }
}
