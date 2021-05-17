import React, { Component } from "react";
import {Grid , Card , CardMedia , CardContent} from '@material-ui/core'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import toko from '../../assets/img/toko.jpg'
import toko2 from '../../assets/img/toko2.jpg'
import bedroom from '../../assets/img/bedroom.jpg'
import livingroom from '../../assets/img/livingroom.jpg'
import workingroom from '../../assets/img/workingroom.jpg'
import dinningroom from '../../assets/img/dinningroom.jpg'
import './landing.css'
export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="containerlanding">
        <div className="body-landing">
        <Slider {...settings}>
            <div>
              <img src={toko} style={{width : '100%' , height : 400}}/>
            </div>
            <div>
            <img src={toko2} style={{width : '100%' , height : 400}}/>
            </div>
         
        </Slider>

        <div className="main" > 
          <h2 className="titlemain">Where To Start?</h2>
          <div className="fiture">
            <Grid container spacing={2} >
              <Grid container item xs={12} wrap="wrap" spacing={2}>
                <Grid item xs={8}>
                <a href="/home/catalog/ruangtamu">
                  <div style={{backgroundImage : `url(${livingroom})` , height : 300 , backgroundSize : 'cover' ,position : 'relative' , backgroundPosition : 'center'}}>
                    <div className="items">
                        Ruang Tamu
                    </div>
                   
                  </div>
                  </a>
                </Grid>
                
                <Grid item xs={4}>
                <a href="/home/catalog/ruangtidur">
                <div style={{backgroundImage : `url(${bedroom})` , height : 300 , backgroundSize : 'cover' , position : 'relative' , backgroundPosition : 'center'}}>
                  <div className="items">
                        Ruang Tidur
                  </div>
                </div>
                </a>
                </Grid>
              </Grid>

              <Grid container item xs={12} wrap="wrap" spacing={2}>
              <Grid item xs={4}>
              <a href="/home/catalog/dekors">
                <div style={{backgroundImage : `url(${workingroom})` , height : 300 , backgroundSize : 'cover' , position : 'relative' ,backgroundPosition : 'center'}}>
                    <div className="items">
                      Ruang Dekors
                    </div>
                  </div>
                  </a>
                </Grid>

                <Grid item xs={8}>
                <a href="/home/catalog/makan">
                  <div style={{backgroundImage : `url(${dinningroom})` , height : 300 , backgroundSize : 'cover', position : 'relative' , backgroundPosition : 'center'}}>
                  <div className="items">
                      Ruang Makan
                    </div>
                  </div>
                </a>
                </Grid>
               
              </Grid>
            </Grid>
          </div>
        </div>

        <div className="product">
          <h2 className="productitle">New Products</h2>
          <p className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, quisque nulla odio faucibus laoreet lacus, .<br></br></p>  
          
          <div className="list-product">
            <Grid container >
              <Grid container item xs={12} spacing={2} justify="center">
                <Grid item xs={3}>
                    <Card>
                      <CardMedia>
                        <img src={toko} height="130" />
                      </CardMedia>
                      <CardContent>
                        <h3>Hello</h3>
                        <p>Hello</p>
                      </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={3}>
                    <Card>
                      <CardMedia>
                        <img src={toko} height="130" />
                      </CardMedia>
                      <CardContent>
                        <h3>Hello</h3>
                        <p>Hello</p>
                      </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={3}>
                    <Card>
                      <CardMedia>
                        <img src={toko} height="130" />
                      </CardMedia>
                      <CardContent>
                        <h3>Hello</h3>
                        <p>Hello</p>
                      </CardContent>
                    </Card>
                </Grid>

              </Grid>
            </Grid>
          </div>
        </div>
        </div>

       
      </div>
    );
  }
}