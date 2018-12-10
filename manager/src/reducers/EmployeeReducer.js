import { EMPLOYEES_FETCH_SUCCESS } from '../actions/types'

const INITIAL_STATE = {
  employeeList: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEES_FETCH_SUCCESS:
      return { ...state, employeeList: action.payload }
    default:
      return state
  }
}
