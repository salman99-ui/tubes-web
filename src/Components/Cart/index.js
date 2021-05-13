import React from 'react';
import './cart.css'
export default function Cart() {
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
          <tr className='border-top'>
            <td>
              <div className='cart-info'>
                <img
                  src={
                    'https://images.unsplash.com/photo-1581428982868-e410dd047a90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                  }
                />
                <div>
                  <p className='title'>Your Table</p>
                  <small className='title'>Rp. 2.000.000</small>
                  <br />
                  <a>Hapus</a>
                </div>
              </div>
            </td>
            <td>
              <input type='number' value='1' />
            </td>
            <td>Rp. 2.000.000</td>
          </tr>
          <tr className='border-top'>
            <td>
              <div className='cart-info'>
                <img
                  src={
                    'https://images.unsplash.com/photo-1581428982868-e410dd047a90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                  }
                />
                <div>
                  <p className='title'>Your Table</p>
                  <small className='title'>Rp. 2.000.000</small>
                  <br />
                  <a>Hapus</a>
                </div>
              </div>
            </td>
            <td>
              <input type='number' value='1' />
            </td>
            <td>Rp. 2.000.000</td>
          </tr>
        </table>
        <div className='total-price'>
          <table>
            <tr>
              <td>Harga Total</td>
              <td style={{ color: '#FFA62B', fontWeight: 'bold' }}>
                Rp. 4.000.000
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
