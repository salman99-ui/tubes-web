import React from 'react';
import './cart.css'
import {useSelector , useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {AddOrder} from '../../redux/wallet/action'
import {Delete} from '../../redux/cart/action'
export default function Cart() {
  const Data = useSelector( state => state.cart.data)
  const total = useSelector( state => state.cart.total_price)
  const saldo = useSelector( state => state.wallet.saldo)

  const dispatch = useDispatch()
  const history = useHistory()

  const Order = (Data) => {
    for(let x of Data){
      dispatch(AddOrder({name : x.name , price : x.price , linksImg : x.linksImg , quantity : x.quantity}))
    }
    dispatch(Delete())
    history.push("/home/order")
  }
 
  return (
    <main>
      <div className="container-cart">
      <div className='main-cart'>
        <table>
          <tr>
            <th>Product</th>
            <th>Jumlah</th>
            <th>Subtotal</th>
          </tr>
          { Data.map((item , index) => (
             <tr className='border-top' key={index}>
             <td>
               <div className='cart-info'>
                 <img
                   src={
                     item.linksImg
                   }
                 />
                 <div>
                   <p className='title'>{item.name}</p>
                   <small className='title price'>Rp. {item.price}</small>
                   <br />
                   <a>Hapus</a>
                 </div>
               </div>
             </td>
             <td>
               <input type='number' value={1} onChange={e => console.log(e.target.value)}/>
             </td>
             <td>{item.price}</td>
           </tr>
          ))
         
          }
        </table>
        <div className='total-price'>
          <table>
            <tr>
              <td>Harga Total</td>
              <td style={{ color: '#FFA62B', fontWeight: 'bold' }}>
                Rp.{total}
              </td>
            </tr>
            <button onClick={() => {
              if(saldo > total){
                  Order(Data)
              }else{
                console.log("Gagal")
              }
            }}>
              Bayar
              </button>
          </table>
        </div>
        
        
      </div>
      </div>
    </main>
  );
}
