import axios from '../axios'
import { 
    SET_TOKEN,
    SET_REGISTER_SUCCESS,
    SET_AUTHOR,
    SET_PAGINATION,
    SET_LOADING,
    SET_SUCCESS
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

export const setAuthor = (page, query) => {
    
    const token = localStorage.token

    return dispatch => {

        if(query) {
            axios.get(`author/search?query=${query}&page=${page}`,{headers : { token }})
            .then((resp) => {
              dispatch({
               type: SET_AUTHOR,
               payload: resp.data.data
              })
              dispatch({
               type: SET_PAGINATION,
               payload: resp.data.paginate
              })
            })
            .catch((err) => {
              console.log(err)
            })
        }else{
            axios.get('author?page='+page,{ headers : { token }}).then((resp) => {
              dispatch({
               type: SET_AUTHOR,
               payload: resp.data.data
              })
              dispatch({
               type: SET_PAGINATION,
               payload: resp.data.paginate
              })
            })
            .catch((err) => {
              console.log(err)
            })
        }

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

export const setSuccess = (data) => {
    return {
      type: SET_SUCCESS,
      payload: data
    }
}
