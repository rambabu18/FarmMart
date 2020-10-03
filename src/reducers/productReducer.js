const { FETCH_PRODUCT } = require("../constants/types");

export const productReducer = (state = {}, action) =>{
    switch(action.type){
        case FETCH_PRODUCT:
            return {items:action.payload};
            default:
                return state;
    }
}