import React from 'react'
import { Route, Redirect } from 'react-router'

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={() => {
            if(localStorage.getItem('token')) {
                return <Component />
            } else {
                return <Redirect to='/'/>
            }
        }} />
    )
}

export default PrivateRoute;


//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in