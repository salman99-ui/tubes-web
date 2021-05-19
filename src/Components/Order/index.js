import React from 'react'
import {Avatar , Divider} from '@material-ui/core'
import './order.scss'
function Index() {
    return (
        <div className="container-root">
            <div className="order-container">
                <div className="info">
                    <div className="identity">
                        <Avatar src="" />
                        <p>Salman Damanhuri</p>
                    </div>

                    <div>
                        <p>Saldo</p>
                        <p>Rp.90.000</p>
                    </div>
                </div>
                {/* hai */}
                <div className="order-produk">
                    <h4>Order Success</h4>
                    <div className="card-produk">
                        <div className="card-detail">
                            <div className="detail">
                                <img src="https://i.ibb.co/zmnBc5G/Sofa1.jpg" width="100" height="100"/>
                                <div className="detail-info">
                                    <p>02 Nov 2021</p>
                                    <p>Lampu Neon</p>
                                </div>
                            </div>

                            <div className="detail-pembayaran">
                                <p>Total Bayar</p>
                                <p className="price-order">Rp.90.000</p>
                            </div>
                        </div>

                        <div className="card-transaction">
                            <p>Lihat Detail Transaksi</p>
                        </div>
                    </div>

                    <Divider />
                </div>
            </div>
        </div>
    )
}

export default Index
