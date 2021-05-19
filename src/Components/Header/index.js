import React from 'react'
import {Header} from '../../Global/Styles'
import User from '../../assets/img/user.png'
import Cart from '../../assets/img/cart.png'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
function Index() {
    const clasess = Header()
    const quantity = useSelector(state => state.cart.quantity)
    return (
        <div className={clasess.header}>
            <div className={clasess.navbar}>
                <div className={clasess.action}>
                    <h2 style={{display : 'inline-block' , marginRight : 14}}><a style={{color : '#FFA62B'}} href="">Furn.</a></h2>
                    <Link to="/home/catalog/dekors" className={clasess.link}>Ruang Dekors</Link>
                    <Link to="/home/catalog/ruangtamu" className={clasess.link}>Ruang Tamu</Link>
                    <Link to="/home/catalog/ruangtidur" className={clasess.link}>Kamar Tidur</Link>
                    
                </div>
                <div className={clasess.menu}>
                    <input type="search" style={{padding : 5}} className={clasess.link} placeholder="Search" />
                    <Link to="/home/profile" className={clasess.link}><img src={User} /></Link>
                    <Link to="/home/cart" className={clasess.link}><img src={Cart} /><span className={( quantity == 0 ? null : clasess.usertest)}>{quantity == 0 ? null : quantity}</span></Link>
                </div>
            </div>
        </div>
    )
}

export default Index
