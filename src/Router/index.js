import React from 'react'
import {BrowserRouter as Router , Route , Switch , Link} from 'react-router-dom'
import Login from '../Components/Login'
import Register from '../Components/Register'
import Main from '../Components/Main'
import Forgot from '../Components/Forgot'

function Index() {
    return (
       
            <Router>
                <Route component={Login} exact path="/login" />
                <Route component={Register} exact path="/register" />
                <Route component={Forgot} exact path="/forget" />
                <Route component={Main} path="/home" />
            </Router> 
        
    )
}

export default Index
