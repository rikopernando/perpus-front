import { SET_TOKEN, SET_REGISTER_SUCCESS } from './actionTypes'

const initialState = {
   token : '',
   register_success : false
}

const reducers = (state = initialState, action) => {
    if(action.type === SET_TOKEN){
      return{
        ...state,
        token: action.payload
      }
    }

    if(action.type === SET_REGISTER_SUCCESS){
      return{
        ...state,
        register_success: action.payload
      }
    }
    return state
}

export default reducers
