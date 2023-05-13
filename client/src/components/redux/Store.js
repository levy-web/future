import {createStore, applyMiddleware} from 'redux'
import { combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from "redux-devtools-extension";
import userSlice from './user/UserSlice';
import categoriesSlice from './categories/CategorySlice';
import featureSlice from './features/FeatureSlice';
import productSlice from './product/ProductSlice';


const persistConfig = {
    key: 'persist-user-key',
    storage
}

const persistedUserReducer = persistReducer(persistConfig, userSlice)
const rootReducer = combineReducers({
    user: persistedUserReducer,
    categories: categoriesSlice,
    products: productSlice,
    features: featureSlice
})

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
const store = createStore(rootReducer, composedEnhancer)
const persistor = persistStore(store)

export default store
export {persistor}