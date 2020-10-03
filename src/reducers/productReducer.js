const { FETCH_PRODUCT, ORDER_PRODUCTS_BY_PRICE } = require("../constants/types");

export const productReducer = (state = {}, action) =>{
    switch(action.type){
        case ORDER_PRODUCTS_BY_PRICE:
            return{
                ...state,
                sort: action.payload.sort,
                filteredItems:action.payload.items
            }
        case FETCH_PRODUCT:
            return {items:action.payload, filteredItems:action.payload};
            default:
                return state;
    }
}