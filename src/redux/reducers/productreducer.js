//creating a reducer function
//reducer functions take in 2 parameters (well 3 if you havent declared the initial state)
//create an initial state

import {Actiontypes} from "../constants/action-types";

const initialstate = {
    products : [],
}
export const productReducer = (state = initialstate, {type, payload}) => {    //destructuring the action parameter to type and payload
        switch (type) {
            case Actiontypes.SET_PRODUCTS:
                return {...state, products:payload} //spread state operator, return whatever state we have
                

            default:
                return state
        }
}

export const Selectedproductreducer = (state = initialstate, {type, payload}) =>{
    switch(type) {
        case Actiontypes.SELECTED_PRODUCTS:
            return{...state, ...payload}
        default:
            return state    
    }
}