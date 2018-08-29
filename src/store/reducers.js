import { SET_TOKEN } from './actionTypes'

const initialState = {
   token : ''
}

const reducers = (state = initialState, action) => {
    if(action.type === SET_TOKEN){
      return{
        ...state,
        token: action.payload
      }
    }
    return state
}

export default reducers
