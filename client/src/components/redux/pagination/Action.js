import { SET_PAGE_NUMBER } from "./Type";

export const setPageNumber = ((item)=>{
    return{
        type: SET_PAGE_NUMBER,
        payload:item
    }
})