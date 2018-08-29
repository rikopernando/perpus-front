import { SET_TOKEN } from './actionTypes'

export const setToken = (data) => {
    return {
      type: SET_TOKEN,
      payload: data
    }
}
