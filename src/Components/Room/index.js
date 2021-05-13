import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import toko from '../../assets/img/toko.jpg'
import toko2 from '../../assets/img/toko2.jpg'

import './room.css'
export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <div className="container">
        <div className="body-room">
        <Slider {...settings}>
        <div className="card">
            <img src={toko} width="96%"/>
            <h3>1</h3>
          </div>
          <div>
          <img src={toko} width="96%"/>
            <h3>2</h3>
          </div>
          <div>
          <img src={toko} width="96%"/>
            <h3>3</h3>
          </div>
          <div>
          <img src={toko} width="96%"/>
            <h3>4</h3>
          </div>
          <div>
          <img src={toko} width="96%"/>
            <h3>5</h3>
          </div>
          <div>
          <img src={toko} width="96%"/>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
         
        </Slider>
        </div>
      </div>
    );
  }
}