import React from 'react'
import toko from '../../assets/img/toko.jpg'
import './detail.css'
function Index() {
    return (
        <div className="container-detail">
            <div className="body-detail">

                <div className="product">
                    <img src={toko} className="img"/>
                </div>
               
                <div className="detail">
                    <h3>Meja Kayu Furnish</h3>
                    <div className="price">
                        <span className="harga">Rp.400000</span>
                        
                        <div className="action">
                            <button>+</button>
                            <span>1</span>
                            <button>-</button>
                        </div>
                    </div>

                    <div className="deskripsi">
                        <p>Ini deskripsi item, lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Hac nisl aliquam diam ipsum rhoncus,
                             amet mi. Tristique vitae at neque congue lacinia est gravida faucibus sed.</p>
                    </div>

                    <div className="material">
                        <p>Kerangka <b>Particle Board</b></p>
                        <p>Pintu Geser <b>Rotan Sintetis</b></p>
                        <p>Tiang Kaki <b>MDF</b></p>
                        <p>Rel Laci <b>Besi</b></p>
                    </div>

                    <div className="total">
                        <span>SubTotal</span>
                        <span><b>Rp.1900000</b></span>
                    </div>

                    <button className="buy">Beli</button>
                    
                </div>

            </div>
        </div>
    )
}

export default Index
