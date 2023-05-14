import React, {useEffect} from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


const AdminRoutes = ({children}) => {
    
    const admin = useSelector((state)=>state.user.isAdmin)

    const checkState = admin ? children : <Navigate to='/'/>

    return checkState
}

export default AdminRoutes;