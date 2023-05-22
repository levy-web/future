import { ADD_WISH, REMOVE_WISH, RESET_WISH } from "./WishListType"

const wishList = []

const wishSlice = (state=wishList, action) =>{
    const product = action.payload
    switch(action.type){
        case ADD_WISH:
            // Check if product already in cart
            const exist = state.find((x) => x.id === product.id)
            if(exist){
                // Increase the quantity
                return [...state]
            }
            else{
                return [...state, {...product, qty:1}]
            }
            break;
        case REMOVE_WISH:
            const exist2 = state.find((x) => x.id === product.id)
            if(exist2.qty === 1){
                return state.filter((x)=>x.id!==exist2.id)
            }
            else{
                return state.map((x)=> x.id===product.id?{...x, qty:x.qty-1}:x)
            }
            break;

        case RESET_WISH:

            return state = []
            break;

        default:
            return state
            break;
    }
}

export default wishSlice