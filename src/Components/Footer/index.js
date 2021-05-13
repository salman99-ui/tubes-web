import React from 'react'
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
                        <li><a className="links" href="/">Beranda</a></li>
                        <li><a className="links" href="">Ruang Tamu</a></li>
                        <li><a className="links" href="">Ruang Makan</a></li>
                        <li><a className="links" href="">Ruang Tidur</a></li>
                        <li><a className="links" href="">Ruang Kerja</a></li>
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
