import React , {useEffect , useState} from 'react'
import {useParams} from 'react-router-dom'
import Axios from 'axios'
import './catalog.scss'
import {useDispatch } from 'react-redux'
import {Add} from '../../redux/cart/action'
function Index() {
    let {name} = useParams()
    const [Data , setData] = useState([])
    const dispatch = useDispatch()

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

                                <button className="buttonbuy" 
                                onClick={() => dispatch(Add({name : item.Name , describe : item.Describe , price : item.Price , linksImg : item.linksImg , quantity : 1 }))}>Buy</button>
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
