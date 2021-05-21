import React, { useEffect , useState } from "react";
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
import axios from 'axios'
import './landing.css'
import {useDispatch } from 'react-redux'
import {Add} from '../../redux/cart/action'

function MultipleItems(){
    const [Data , setData] = useState([])
    const dispatch = useDispatch()

    useEffect( () => {
      axios.get("http://localhost:4000/data/dekors").then( result => {
        setData(result.data.data)
      })
    }, [])
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

        <div className="product2">
          <h2 className="productitle">New Products</h2>
                    
          <div className="list-product">
            <Grid container >
              <Grid container item xs={12} spacing={2} justify="center">
                <Grid item xs={3}>
                    <Card>
                      <CardMedia>
                        <img src="https://i.ibb.co/0FrJGc7/lampu-lantai.jpg" height="200" width="100%"/>
                      </CardMedia>
                      <CardContent>
                        <h3>Lampu Lantai</h3>
                        <p className="price">Rp.180000</p>
                        <span>terbuat dari bahan polyester canvas dan rangka kayu pilihan, sehingga kuat dan kokoh</span>
                        <button className="buttoncart" onClick={() => dispatch(Add({name : "Lampu Lantai" , describe : "terbuat dari bahan polyester canvas" , price : 180000 , linksImg : "https://i.ibb.co/0FrJGc7/lampu-lantai.jpg" , quantity : 1 }))}>
                          Add to Cart
                        </button>
                      </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={3}>
                    <Card>
                      <CardMedia>
                        <img src="https://i.ibb.co/bKhfrWs/lampu-gantung.jpg"  height="200" width="100%" />
                      </CardMedia>
                      <CardContent>
                        <h3>Lampu Gantung</h3>
                        <p className="price">Rp.160000</p>
                        <span>terbuat dari bahan polyester canvas dan rangka kayu pilihan, sehingga kuat dan kokoh</span>
                        <button className="buttoncart" onClick={() => dispatch(Add({name : "Lampu Gantung" , describe : "terbuat dari bahan polyester canvas" , price : 160000 , linksImg : "https://i.ibb.co/bKhfrWs/lampu-gantung.jpg" , quantity : 1 }))}>Add to Cart</button>
                      </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={3}>
                    <Card>
                      <CardMedia>
                        <img src="https://i.ibb.co/hBqBWW4/lampu-lantai-hiasan.jpg" height="200" width="100%"/>
                      </CardMedia>
                      <CardContent>
                        <h3>Lampu Hiasan</h3>
                        <p className="price">Rp.150000</p>
                        <span>terbuat dari bahan polyester canvas dan rangka kayu pilihan, sehingga kuat dan kokoh</span>
                        <button className="buttoncart" onClick={() => dispatch(Add({name : "Lampu Hiasan" , describe : "terbuat dari bahan polyester canvas" , price : 150000 , linksImg : "https://i.ibb.co/hBqBWW4/lampu-lantai-hiasan.jpg" , quantity : 1 }))} >Add to Cart</button>
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
export default MultipleItems