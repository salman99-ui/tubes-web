import React from 'react'
import {BrowserRouter as Router , Route , Switch , Link} from 'react-router-dom'
import Header from '../Header'
import Landing from '../Landing'
import Footer from '../Footer'
import Detail from '../Detail'
import Profile from '../Profile'
import Cart from '../Cart'
import Catalog from '../Catalogue'
import './main.css'
function index() {
    return (
        <div className="container-main">
           
            <Header />
            <div className="body-main">
            <Router>
                <Switch>
                    <Route path="/home"  component={Landing} exact/>
                    <Route path="/home/profile" component={Profile} />
                    <Route path="/home/catalog/:name" component={Catalog} />
                    <Route path="/home/detail/:id" component={Detail} />
                    <Route path="/home/cart" component={Cart} />
                    
                </Switch>
            </Router>
            </div>

            <Footer />

            
        </div>
    )
}

export default index
