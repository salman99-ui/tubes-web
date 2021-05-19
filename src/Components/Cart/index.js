import React from 'react';
import './cart.css'
import {useSelector} from 'react-redux'
export default function Cart() {
  const Data = useSelector( state => state.data)
  const total = useSelector( state => state.total_price)
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
            <button>Bayar</button>
          </table>
        </div>
        
        
      </div>
      </div>
    </main>
  );
}
