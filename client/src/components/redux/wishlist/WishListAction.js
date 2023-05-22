import { ADD_WISH, REMOVE_WISH, RESET_WISH } from "./WishListType"

export const addWish = (product) =>{
    return {
        type:ADD_WISH,
        payload:product
    }
    
}

// For Delete Item to Cart
export const delWish = (product) =>{
    return {
        type:REMOVE_WISH,
        payload:product
    }
}
// For resetting the Cart
export const resetWish = () =>{
    return {
        type:RESET_WISH       
    }
}