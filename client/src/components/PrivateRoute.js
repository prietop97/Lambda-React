import React from 'react'
import {Route,Redirect} from "react-router-dom"

export default function PrivateRoute({component: Component , ...otherProps}) {
    const token = localStorage.getItem("token")
    return (
        <Route {...otherProps} render={(props) => {
            if(token){
                return <Component {...props}/>
            } else {
                return <Redirect to="/"/>
            }
        }} />
    )
}
