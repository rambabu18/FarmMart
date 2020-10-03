import { FETCH_PRODUCT } from "../constants/types";

export const fetchProducts = () => async (dispatch)=>{

    const res = await fetch("/api/products");
    const data = await res.json();
    dispatch({
        type: FETCH_PRODUCT,
        payload: data
    });
}