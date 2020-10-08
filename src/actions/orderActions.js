import { CLEAR_CART, CREATE_ORDER } from "../constants/types"

export const createOrder = (order)=> (dispatch)=>{
    fetch("/api/orders", {
        method: "POST",
        headers: {
            "Content-type" : "application/json"
        },
        body: JSON.stringify(order),
    })
    .then((res)=>res.json())
    .then((data)=>{
        dispatch({type: CREATE_ORDER, payload:data});
        localStorage.clear("cartItems");
        dispatch({type:CLEAR_CART});
    })
}

export const clearOrder = () =>(dispatch)=>{
  dispatch({type: CREATE_ORDER});
}