import { REMOVE_USER, LOGIN_USER, LOAD_USERS, LOGIN_USER_ERROR } from "./UserType";

const initialState = {
    isLoading: false,
    isLoggedIn: false,
    buyer: null,
    error: '',
    navigate: false,
    token:null,
    isAdmin:false
}


const userSlice = (state=initialState, action)=>{
    switch(action.type){
        case LOAD_USERS: return {
            ...state,
            isLoading: true,
        };

        case LOGIN_USER: 
        let isAdmin = action.payload.data.admin.length > 0 ? true : false
        return {
            
            ...state,
            isLoading: false,
            isLoggedIn: true,
            buyer: action.payload,
            token: action.payload.data.token,
            navigate: true,
            isAdmin:isAdmin,
            error: ""
        }
        case REMOVE_USER: return {
            ...state,
            buyer: null,
            isLoggedIn:false,
            isAdmin:false,
            token:null
        }
        case LOGIN_USER_ERROR: return {
            ...state,
            isLoading: false,
            error: action.payload,
            navigate: false,
            buyer: null
        }
        default: return state
    }
}

export default userSlice