import { 
    SET_TOKEN,
    SET_REGISTER_SUCCESS,
    SET_AUTHOR
} from './actionTypes'

const initialState = {
   token : '',
   register_success : false,
   author : []
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

    if(action.type === SET_AUTHOR){
      return{
        ...state,
        author: action.payload
      }
    }
    return state
}

export default reducers
