import { jwtDecode } from 'jwt-decode'
import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoutes({children}) {
    
    let token = localStorage.getItem('token')
    
    try {
        const decoded = jwtDecode(token)
        if(decoded.role!='user'){
            localStorage.clear()
            return <Navigate to="/signin"/>
        }
    } catch (error) {
        localStorage.clear()
        return <Navigate to="/signin"/>
    }

    if(token)  return children

    return <Navigate to="/signin"/>
}
