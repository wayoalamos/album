import { EMPLOYEE_UPDATE } from './types'

export const employeeUpdate = text => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: text,
  }
}
