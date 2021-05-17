import React from 'react'
import {Header} from '../../Global/Styles'
import User from '../../assets/img/user.png'
import Cart from '../../assets/img/cart.png'
import classes from '../../Global/Styles/Header'
function Index() {
    const clasess = Header()
    return (
        <div className={clasess.header}>
            <div className={clasess.navbar}>
                <div className={clasess.action}>
                    <h2 style={{display : 'inline-block' , marginRight : 14}}><a style={{color : '#FFA62B'}} href="">Furn.</a></h2>
                    <a href="/home/catalog/dekors" className={clasess.link}>Ruang Dekors</a>
                    <a href="/home/catalog/ruangtamu" className={clasess.link}>Ruang Tamu</a>
                    <a href="/home/catalog/ruangtidur" className={clasess.link}>Kamar Tidur</a>
                </div>
                <div className={clasess.menu}>
                    <input type="search" style={{padding : 5}} className={clasess.link} placeholder="Search" />
                    <a href="" className={clasess.link}><img src={User} /></a>
                    <a href="/home/profile" className={clasess.link}><img src={Cart} /><span className={clasess.usertest}>1</span></a>
                </div>
            </div>
        </div>
    )
}

export default Index
