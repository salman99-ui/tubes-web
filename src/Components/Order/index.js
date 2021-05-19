import React from 'react'
import {Avatar , Divider} from '@material-ui/core'
import {useSelector , useDispatch} from 'react-redux'
import './order.scss'
function Index() {
    const Saldo = useSelector(state => state.wallet.saldo)
    const Order = useSelector(state => state.wallet.last_transaction)
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
                        <p>Rp.{Saldo}</p>
                    </div>
                </div>
                {/* hai */}
                <div className="order-produk">
                    <h4>Order Success</h4>
                    { Order.map((item , index) => (
                        <>
                        <div className="card-produk" key={index}>
                        <div className="card-detail">
                            <div className="detail">
                                <img src={item.linksImg} width="100" height="100"/>
                                <div className="detail-info">
                                    <p>02 Nov 2021</p>
                                    <p className="item">{item.name}</p>
                                </div>
                            </div>

                            <div className="detail-pembayaran">
                                <p>Total Bayar</p>
                                <p className="price-order">Rp.{item.price}</p>
                            </div>
                        </div>

                        <div className="card-transaction">
                            <p>Lihat Detail Transaksi</p>
                        </div>
                    </div>

                    <Divider />
                    </>
                    ))}
                    
                </div>
            </div>
        </div>
    )
}

export default Index
