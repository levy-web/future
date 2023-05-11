import { combineReducers } from "redux";
import categoriesSlice from "./categories/CategorySlice";
import featureSlice from "./features/FeatureSlice";
import productSlice from "./product/ProductSlice";

const rootReducer = combineReducers({
    categories: categoriesSlice,
    products: productSlice,
    features: featureSlice
});

export default rootReducer;