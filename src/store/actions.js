import { SET_TOKEN, SET_REGISTER_SUCCESS } from './actionTypes'

export const setToken = (data) => {
    return {
      type: SET_TOKEN,
      payload: data
    }
}

export const setRegisterSuccess = (data) => {
    return {
      type: SET_REGISTER_SUCCESS,
      payload: data
    }
}
