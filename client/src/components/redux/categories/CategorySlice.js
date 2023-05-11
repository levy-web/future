import { FETCH_CATEGORIES, ADD_TO_PROTECTED_AREA, LOAD_CATEGORIES, FETCH_ERROR, ADD_TO_SIMILAR_PRODUCTS,
     ADD_TO_PROTECTED_AREA_SIMILAR_PRODUCTS, RESET_PROTECTED_AREA_SIMILAR_PRODUCTS, ADD_CATEGORIES,
    ADD_PRODUCT_COLOR } from "./CategoryType";

const initialState = {
    status: false,
    categories: [],
    error: '',
    simProd: [],
    similarProtectedProducts: [],
    protectedArea: []
}



const categoriesSlice = (state=initialState, action)=>{
    switch(action.type){
        case LOAD_CATEGORIES: return {
            ...state,
            status: true,
        }
        break;

        case FETCH_CATEGORIES: return {
            ...state,
            // status: false,
            categories: [...action.payload]
        }
        break;

        case ADD_CATEGORIES: return {
            ...state,
            // status: false,
            categories: [...state.categories, action.payload]
        }
        break;

        case FETCH_ERROR: return {
            ...state,
            status: false,
            error: [...action.payload]
        }
        break;
        
        case ADD_PRODUCT_COLOR: return {
            ...state,
            simProd: action.payload
        }
        break;

        case ADD_TO_SIMILAR_PRODUCTS: return {
            ...state,
            simProd: action.payload
        }
        break;

        case ADD_TO_PROTECTED_AREA_SIMILAR_PRODUCTS: return {
            ...state,
            similarProtectedProducts:  [...state.similarProtectedProducts, action.payload]
        }
        case ADD_TO_PROTECTED_AREA: return {
            ...state,
            protectedArea:  [...state.protectedArea, action.payload]
        }
        break;
        case RESET_PROTECTED_AREA_SIMILAR_PRODUCTS: return {
            ...state,
            similarProtectedProducts:  [],
            protectedArea: []
        }
        break;
        

        default: return state
    }
}

export default categoriesSlice