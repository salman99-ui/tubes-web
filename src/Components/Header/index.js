import React from 'react'
import {Header} from '../../Global/Styles'
import User from '../../assets/img/user.png'
import Cart from '../../assets/img/cart.png'
function Index() {
    const clasess = Header()
    return (
        <div className={clasess.header}>
            <div className={clasess.navbar}>
                <div className={clasess.action}>
                    <h2 style={{display : 'inline-block' , marginRight : 14}}><a style={{color : '#FFA62B'}} href="">Furn.</a></h2>
                    <a href="" className={clasess.link}>Ruang Makan</a>
                    <a href="" className={clasess.link}>Ruang Tamu</a>
                    <a href="" className={clasess.link}>Kamar Tidur</a>
                </div>
                <div className={clasess.menu}>
                    <input type="search" style={{padding : 5}} className={clasess.link} placeholder="Search" />
                    <a href="" className={clasess.link}><img src={User} /></a>
                    <a href="/home/profile" className={clasess.link}><img src={Cart} /></a>
                </div>
            </div>
        </div>
    )
}

export default Index
