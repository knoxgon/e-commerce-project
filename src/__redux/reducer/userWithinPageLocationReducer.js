import {USER_AT_PAGE_LOCATION} from '../constants/types'

const initState = {}

export const userWithinPageLocationReducer = (state = initState, action) => {
  switch(action.type) {
    case USER_AT_PAGE_LOCATION:
      return {
        ...state,
        loc: action.payload.coord
      }
    default:
      return state;
  }
}
