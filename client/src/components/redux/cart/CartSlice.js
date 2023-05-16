import { ADD_CART, REMOVE_CART, RESET_CART } from "./CartType"

const cart = []

const cartSlice = (state=cart, action) =>{
    const product = action.payload
    switch(action.type){
        case ADD_CART:
            // Check if product already in cart
            const exist = state.find((x) => x.id === product.id)
            if(exist){
                // Increase the quantity
                return state.map((x)=>x.id ===product.id?{...x, qty: x.qty+1}:x)
            }
            else{
                return [...state, {...product, qty:1}]
            }
            break;
        case REMOVE_CART:
            const exist2 = state.find((x) => x.id === product.id)
            if(exist2.qty === 1){
                return state.filter((x)=>x.id!==exist2.id)
            }
            else{
                return state.map((x)=> x.id===product.id?{...x, qty:x.qty-1}:x)
            }
            break;

        case RESET_CART:

            return state = []
            break;

        default:
            return state
            break;
    }
}

export default cartSlice