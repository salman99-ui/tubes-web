import React , {useEffect , useState} from 'react'
import {useParams} from 'react-router-dom'
import Axios from 'axios'
import './catalog.scss'

function Index() {
    let {name} = useParams()
    const [Data , setData] = useState([])
    useEffect(() => {
        Axios.get(`http://localhost:4000/data/${name}`).then( result => {
            setData(result.data.data)
        })} , [])

    return (
        <div className="container-catalog">
            <h2 style={{textAlign : 'center'}}>Ruang {name}</h2>
            <div className="identitas">
                
            
            <div className="main-catalog">
                {
                    Data.map((item , index) => (
                        <div className="card" key={index}>
                            <div className="card-img">
                                <img src={item.linksImg} className="img-card"/>
                            </div>

                            <div className="card-detail">
                                <p className="name">{item.Name}</p>
                                <p className="price">Rp.{item.Price.toFixed(2)}</p>
                                <span className="describe" >{item.Describe}</span>

                                <button className="buttonbuy">Buy</button>
                            </div>
                        </div>
                    ))
                }
               
            </div>
            </div>
        </div>
    )
}

export default Index
