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
           <Router>
            <Header />
            <div className="body-main">
            
                <Switch>
                    <Route path="/home" exact>
                        <Landing />
                    </Route>
                    <Route path="/home/profile"  >
                        <Profile />
                    </Route>
                    <Route path="/home/catalog/:name"exact>
                        <Catalog />
                    </Route>
                    <Route path="/home/detail/:id" component={Detail} />
                    <Route path="/home/cart">
                        <Cart />
                    </Route>
                    <Route path="/home/cart">
                        <Cart />
                    </Route>
                    
                </Switch>
           
            </div>

            <Footer />

            </Router>
        </div>
    )
}

export default Index
