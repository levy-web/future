import { combineReducers } from "redux";
import categoriesSlice from "./categories/CategorySlice";
import featureSlice from "./features/FeatureSlice";
import paginationSlice from "./pagination/Slice";
import productSlice from "./product/ProductSlice";
import userSlice from './user/UserSlice';

const rootReducer = combineReducers({
    categories: categoriesSlice,
    products: productSlice,
    features: featureSlice,
    user:userSlice,
    pagination:paginationSlice

});

export default rootReducer;