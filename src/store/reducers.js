import { 
    SET_TOKEN,
    SET_REGISTER_SUCCESS,
    SET_AUTHOR,
    SET_PAGINATION,
    SET_LOADING
} from './actionTypes'

const initialState = {
   token : '',
   register_success : false,
   author : [],
   pagination : {},
   loading : true
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

    if(action.type === SET_PAGINATION){
      return{
        ...state,
        pagination: action.payload
      }
    }

    if(action.type === SET_LOADING){
      return{
        ...state,
        loading: action.payload
      }
    }
    return state
}

export default reducers
