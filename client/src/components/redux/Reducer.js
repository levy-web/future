import { combineReducers } from "redux";
import categoriesSlice from "./categories/CategorySlice";

const rootReducer = combineReducers({
    categories: categoriesSlice

});

export default rootReducer;