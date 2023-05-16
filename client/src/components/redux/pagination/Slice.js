import { SET_PAGE_NUMBER } from "./Type";

const initialState = {
    pageNumber: 0,
    productsPerPage : 10
}

const paginationSlice = (state=initialState, action)=>{
    switch(action.type){

        case SET_PAGE_NUMBER: return {
            ...state,
            // status: false,
            pageNumber: action.payload
        }
        break; 

        default: return state
    }
}

export default paginationSlice