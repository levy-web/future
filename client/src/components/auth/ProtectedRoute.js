import React, {useEffect} from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


const ProtectedRoute = ({children}) => {
    
    const isLoggedIn = useSelector((state)=>state.user.isLoggedIn)

    const checkState = isLoggedIn ? children : <Navigate to='/login'/>

    return checkState
}

export default ProtectedRoute;