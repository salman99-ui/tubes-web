import React from 'react'
import {Avatar , Divider} from '@material-ui/core'
import {useSelector , useDispatch} from 'react-redux'
import './order.scss'

const Item = (item) => (
    <>
    <div className="card-produk" key={item.name}>
    <div className="card-detail">
        <div className="detail">
            <img src={item.linksImg} width="100" height="100"/>
            <div className="detail-info">
                <p>{item.calender}</p>
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
)
function Index() {
    
    const Order = useSelector(state => state.wallet)
    const User  = useSelector(state => state.user) 
    return (
        <div className="container-root">
            <div className="order-container">
                <div className="info">
                    <div className="identity">
                        <img src={User.img} width="80" height="80" />
                        <p className="name-order">{User.name}</p>
                    </div>

                    <div className="detail-saldo">
                        <p className="saldo-header">Saldo</p>
                        <p className="saldo">Rp.{Order.saldo}</p>
                    </div>
                </div>
                {/* hai */}
                <div className="order-produk">
                    <h4>Order Success</h4>
                    { Order.last_transaction.length == 0 ? "Kosong" : Order.last_transaction.map((item , index) => <Item {...item} /> )}
                    
                </div>
            </div>
        </div>
    )
}

export default Index
