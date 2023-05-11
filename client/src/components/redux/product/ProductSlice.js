import { FETCH_PRODUCTS, LOAD_PRODUCTS, FETCH_PRODUCTS_ERROR, ADD_PRODUCT_COLORS, 
    FETCH_ONE_PRODUCTS, FETCH_ONE_PRODUCTS_ERROR, LOAD_ONE_PRODUCTS } from "./ProductType"

const initialState = {
    status: false,
    products: [],
    product: [],
    error: '',
    prodColors: []
}

const productSlice = (state=initialState, action)=>{
    switch(action.type){
        case LOAD_PRODUCTS: return {
            ...state,
            status: true,
        }
        break;

        case FETCH_PRODUCTS: return {
            ...state,
            // status: false,
            products: [...action.payload]
        }
        break;

        case FETCH_ONE_PRODUCTS: return {
            ...state,
            // status: false,
            product: action.payload,
            prodColors: [...action.payload.product_colors]
        }
        break;

        case ADD_PRODUCT_COLORS: return {
            ...state,
            // status: false,
            prodColors: [...state.prodColors, action.payload]
        }
        break;

        case FETCH_PRODUCTS_ERROR: return {
            ...state,
            status: false,
            error: [...action.payload]
        }
        break;        

        default: return state
    }
}

export default productSlice