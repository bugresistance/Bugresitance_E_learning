import React from 'react'
import { Navigate } from 'react-router-dom'
const UserProtected = ({children}) => {
    const isCookie = localStorage.getItem('jwtoken')
    if(isCookie){
        return children
    }
    else {
        return <Navigate to={"/adminlogin"}/>
    }
}

export default UserProtected