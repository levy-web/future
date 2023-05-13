import { FETCH_PRODUCTS, LOAD_PRODUCTS, FETCH_PRODUCTS_ERROR, ADD_PRODUCT_COLORS, REMOVE_PROD_FEATURE,
    FETCH_ONE_PRODUCTS, FETCH_ONE_PRODUCTS_ERROR, LOAD_ONE_PRODUCTS } from "./ProductType"

const initialState = {
    loading: true,
    products: [],
    product: [],
    error: '',
    prodColors: [],
    features:[]
}

const productSlice = (state=initialState, action)=>{
    switch(action.type){



        case FETCH_PRODUCTS: return {
            ...state,
            loading: false,
            products: [...action.payload]
        }
        break;

        case FETCH_ONE_PRODUCTS: return {
            ...state,
            loading: false,
            product: action.payload,
            prodColors: [...action.payload.product_colors],
            features:[...action.payload.features]
        }
        break;

        case ADD_PRODUCT_COLORS: return {
            ...state,
            // status: false,
            prodColors: [...state.prodColors, action.payload]
        }
        break;

        case REMOVE_PROD_FEATURE: 
        let newArrFeatures = state.features.filter((feature)=> feature.id !== action.payload)
        return {
            ...state,
            // status: false,
            features : [...newArrFeatures]           
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