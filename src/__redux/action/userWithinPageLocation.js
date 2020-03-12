import {USER_AT_PAGE_LOCATION} from '../constants/types'

export const syncUserPosition = (current) => {
  return (dispatch, getState) => {
    dispatch({
      type: USER_AT_PAGE_LOCATION,
      payload: {
        coord: 'P5-A8-Z1F'
      }
    })
  }
}
