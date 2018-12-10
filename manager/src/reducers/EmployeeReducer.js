import { EMPLOYEE_CREATE, EMPLOYEE_UPDATE } from '../actions/types'

const INITIAL_STATE = {
  newEmployeeName: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, newEmployeeName: action.payload }
    case EMPLOYEE_CREATE:
      return { ...state }
    default:
      return { ...state }
  }
}
