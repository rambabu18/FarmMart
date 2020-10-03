import { FETCH_PRODUCT, ORDER_PRODUCTS_BY_PRICE } from "../constants/types";

export const fetchProducts = () => async (dispatch)=>{

    const res = await fetch("/api/products");
    const data = await res.json();
    dispatch({
        type: FETCH_PRODUCT,
        payload: data
    });
}

export const sortProducts = (filteredProducts,sort)=>(dispatch)=>{
   const sortedProducts = filteredProducts.slice();
   if(sort==="latest"){
       sortedProducts.sort((a,b)=>(a.id > b.id ? 1:-1));
   }else{
       sortedProducts.sort((a,b)=>
       sort === "lowest" 
    ? a.price > b.price ? 
    1 : -1
     : sort === "highest" 
    ? a.price < b.price ?
     1:-1
     : a.id < b.id
      ? 1 :-1
       );
   
   }
    dispatch({
        type:ORDER_PRODUCTS_BY_PRICE,
        payload:{
            price:sort,
            items:sortedProducts
            
        }
    })
}