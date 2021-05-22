import React , {useState , useRef} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import './forgot.scss'
function Index() {
    const getData = (data) => {
        axios.post('http://localhost:4000/auth/checkemail' , {email : data}).then( Result => {
            if(Result.status == 200){
                setSuccess(true)
            }  
        })
        .catch(err => { 
            setErr(true)
        })
    }

    const change = (data) => {
        axios.post('http://localhost:4000/auth/changepassword' , data).then( Result => {
            if(Result.status == 200){
                history.replace('/login')
            }  
        })
        .catch(err => { })
    }

    const input = useRef('')
    const password = useRef('')
    const [success , setSuccess]= useState(false)
    const [err , setErr] = useState(false)
    const history = useHistory()
    return (
        <div className="forgot-container">
            <div className="forgot-body">
                <h4>Forgot Password</h4>
                <div className="forgot-main">
                    <p>Silahkan Masukan Email</p>
                    
                    <div className={(success ? 'hidden' : 'show')}>
                        <input type="text"  placeholder="Your Email" ref={input}/> 
                        <span className={(err ? 'show' : 'hidden')}>Email Not Registered</span>
                        <button onClick={() => getData(input.current.value)}>Send</button>
                    </div>

                    <div className={(success ? 'show' : 'hidden')}>
                        <input type="password"  placeholder="Your Password" ref={password} />
                        
                        <button onClick={() => change({email : input.current.value , password : password.current.value })}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
