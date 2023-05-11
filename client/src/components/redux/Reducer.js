import { combineReducers } from "redux";
import categoriesSlice from "./categories/CategorySlice";
import productSlice from "./product/ProductSlice";

const rootReducer = combineReducers({
    categories: categoriesSlice,
    products: productSlice

});

export default rootReducer;