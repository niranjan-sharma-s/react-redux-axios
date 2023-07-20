

const initialState = {
    products:[]
}

export const reducer = (state = initialState, {type , payload}) => {
        switch(type){
            case type : return {...state, products:payload};
            default : return state
        }
    }
