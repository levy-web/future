import { combineReducers } from "redux";
import cartSlice from "./cart/CartSlice";
import categoriesSlice from "./categories/CategorySlice";
import featureSlice from "./features/FeatureSlice";
import paginationSlice from "./pagination/Slice";
import productSlice from "./product/ProductSlice";
import userSlice from './user/UserSlice';
import wishSlice from "./wishlist/WishListSlice";

const rootReducer = combineReducers({
    categories: categoriesSlice,
    products: productSlice,
    features: featureSlice,
    user:userSlice,
    pagination:paginationSlice,
    wish:wishSlice
    // cart: cartSlice

});

export default rootReducer;