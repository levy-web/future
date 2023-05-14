import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from "redux-thunk";
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './Reducer';

const persistConfig = {
    key: 'persist-key',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
const store = createStore(persistedReducer, composedEnhancer)
const persistor = persistStore(store)

export default store
export {persistor}