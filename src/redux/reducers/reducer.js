import { actionTypes } from "../actionTypes/actionTypes";


const initialState = {
    products:[]
}

export const reducer = (state = initialState, {type , payload}) => {
        switch(type){
            case type : return {...state, products:payload};
            default : return state
        }
    }

export const singleProductReducer = (state = {} , {type,payload}) => {
    switch(type) { 
        case actionTypes.SELECTED_PRODUCT : return {...state, ...payload}

        case actionTypes.DELETE_PRODUCT:return {}
        default: return state
     }
}
