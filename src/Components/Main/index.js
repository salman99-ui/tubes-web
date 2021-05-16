import React , {useEffect}from 'react'
import {BrowserRouter as Router , Route , Switch , useHistory} from 'react-router-dom'
import Header from '../Header'
import Landing from '../Landing'
import Footer from '../Footer'
import Detail from '../Detail'
import Profile from '../Profile'
import Cart from '../Cart'
import Catalog from '../Catalogue'
import './main.css'
function Index() {
    const history = useHistory()
    useEffect(() => {
        let token = localStorage.getItem('token')
        if(token != null){
             history.replace('/home')
            }else{
                history.replace('/login')
            }
    } , [])
    return (
        <div className="container-main">
           
            <Header />
            <div className="body-main">
            <Router>
                <Switch>
                    <Route path="/home"  component={Landing} exact/>
                    <Route path="/home/profile" component={Profile} />
                    <Route path="/home/catalog/:name" component={Catalog} exact/>
                    <Route path="/home/detail/:id" component={Detail} />
                    <Route path="/home/cart" component={Cart} />
                    
                </Switch>
            </Router>
            </div>

            <Footer />

            
        </div>
    )
}

export default Index
