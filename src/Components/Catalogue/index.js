import React from 'react'
import {useParams} from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import toko from '../../assets/img/toko.jpg'
import './catalog.css'
function Index() {
    let {name} = useParams()
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
      };

    return (
        <div className="container-catalog">
            <h2 style={{textAlign : 'center'}}>Ruang {name}</h2>
            <div className="identitas">
                
            
            <div className="main-catalog">
                
                <div className="catalog">
                    <Slider {...settings}>
                        <div className="card">
                            <img src={toko} className="card-img" />
                            <p>Deskripsi</p>
                            <p>loreasas csdss</p>
                        </div>

                        <div className="card">
                            <img src={toko} className="card-img" />
                            <p>Deskripsi</p>
                            <p>loreasas csdss</p>
                        </div>

                        <div className="card">
                            <img src={toko} className="card-img" />
                            <p>Deskripsi</p>
                            <p>loreasas csdss</p>
                        </div>

                        <div className="card">
                            <img src={toko} className="card-img" />
                            <p>Deskripsi</p>
                            <p>loreasas csdss</p>
                        </div>

                        <div className="card">
                            <img src={toko} className="card-img" />
                            <p>Deskripsi</p>
                            <p>loreasas csdss</p>
                        </div>

                        <div className="card">
                            <img src={toko} className="card-img" />
                            <p>Deskripsi</p>
                            <p>loreasas csdss</p>
                        </div>

                        <div className="card">
                            <img src={toko} className="card-img" />
                            <p>Deskripsi</p>
                            <p>loreasas csdss</p>
                        </div>
                    </Slider>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Index
