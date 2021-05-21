import React from 'react'
import {Link} from 'react-router-dom'
import './footer.css'
function Index() {
    return (
        <div className="containerfooter">
            <div className="body-footer">
                <div className="item">
                    <h3 className="title">Furn</h3>
                    <p className="links">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                </div>

                <div className="item">
                    <h3 className="title">Links</h3>
                    <ul className="list-links">
                        <li><Link className="links" to="/home">Beranda</Link></li>
                        <li><Link className="links" to="/home/catalog/ruangtamu">Ruang Tamu</Link></li>
                        <li><Link className="links" to="/home/catalog/dekors">Ruang Dekors</Link></li>
                        <li><Link className="links" to="/home/catalog/ruangtidur">Ruang Tidur</Link></li>
                        <li><Link className="links" to="">Ruang Kerja</Link></li>
                    </ul>
                </div>

                <div className="item">
                    <h3 className="title">Contact Us</h3>
                    <ul className="list-links">
                        <li><a className="links" href="">Itera , Lampung Selatan</a></li>
                        <li><a className="links" href="">+0895338210507</a></li>
                        <li><a className="links" href="">Senin - Minggu / 10.00 - 19.00</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Index
