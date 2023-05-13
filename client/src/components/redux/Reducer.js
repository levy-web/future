import { combineReducers } from "redux";
import categoriesSlice from "./categories/CategorySlice";
import featureSlice from "./features/FeatureSlice";
import productSlice from "./product/ProductSlice";
import userSlice from './user/UserSlice'

const rootReducer = combineReducers({
    categories: categoriesSlice,
    products: productSlice,
    features: featureSlice,
    user: userSlice
});

export default rootReducer;