import { 
    SET_TOKEN,
    SET_REGISTER_SUCCESS,
    SET_AUTHOR,
    SET_PAGINATION,
    SET_LOADING
} from './actionTypes'

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

export const setAuthor = (data) => {
    return {
      type: SET_AUTHOR,
      payload: data
    }
}

export const setPagination = (data) => {
    return {
      type: SET_PAGINATION,
      payload: data
    }
}

export const setLoading = (data) => {
    return {
      type: SET_LOADING,
      payload: data
    }
}
