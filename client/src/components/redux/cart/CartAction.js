import { ADD_CART, REMOVE_CART, RESET_CART } from "./CartType"

export const addCart = (product) =>{
    return {
        type:ADD_CART,
        payload:product
    }
    
}

// For Delete Item to Cart
export const delCart = (product) =>{
    return {
        type:REMOVE_CART,
        payload:product
    }
}
// For resetting the Cart
export const resetCart = () =>{
    return {
        type:RESET_CART       
    }
}