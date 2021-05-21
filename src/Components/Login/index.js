import React , {useState ,useEffect}from 'react'
import {GoogleLogin} from 'react-google-login'
import {Login} from '../../Global/Styles'
import Axios from 'axios'
import * as Yup from 'yup'
import {Formik , Form , Field , ErrorMessage} from 'formik'
import {useHistory , Link} from 'react-router-dom'
import {User} from '../../redux/user/action'
import {useDispatch} from 'react-redux'
function Index() {
    
    const [ error , setErr] = useState('')
    const history = useHistory()
    const dispatch = useDispatch()

    const response = (data) => {
        const {email , name , imageUrl } = data.profileObj
        const data2 = {
            email , name
        }

        Axios.post("http://localhost:4000/auth/googlelogin" , data2).then(result => {
            if(result.status == 201){

            localStorage.setItem('token' , result.data.token)
            dispatch(User({name : name , img : imageUrl }))
            history.push('/home')
            console.log()

            }else{
                history.replace('/login')
            }
        })
    }
    const initialvalues = {email : '' , password : ''}
    const schemavalidation = Yup.object().shape({
        email : Yup.string().email('Must sign as email').required('Required Field') ,
        password : Yup.string().required('Required Field')
    })
    const handlesubmit = (values , actions) => {
        Axios.post('http://localhost:4000/auth/login' , values).then( result => {
            if(result.status == 200){
                localStorage.setItem('token' , result.data.token)
                history.push('/home')
            }else{
                setErr(result.data.message)
            }
        })

        console.log(values)
    }
    const classes = Login()

    useEffect( () => {
    } , [error])
    return (
        <div className={classes.container} >
            <div className={classes.body}>
                <p className={classes.error}>{error}</p>
                <h2>Login</h2>
                <div className={classes.form}>
                    <Formik
                        initialValues={initialvalues}
                        validationSchema={schemavalidation}
                        onSubmit={handlesubmit}
                    >
                        <Form>
                        <label htmlFor="email">Email</label>
                        <Field type="text" id="email" className={classes.input} name="email"/>
                        <ErrorMessage name="email" className={classes.error}>
                            {msg => <p style={{color : 'red'  , margin : 0}}> {msg}</p>}
                        </ErrorMessage>

                        <label htmlFor="password">Password</label>
                        <Field type="password" id="password" className={classes.input} name="password" />
                        <ErrorMessage name="password" className={classes.error}>
                            {msg => <p style={{color : 'red' , margin : 0}}> {msg}</p>}
                        </ErrorMessage>
                        <p style={{float : 'left'}}><Link to="/register">Dont have account?</Link></p>
                        <p className={classes.forgot}><Link to="">Forgot Password ?</Link></p>
                        <button className={classes.login}>Login</button>
                        
                        </Form>
                    </Formik>

                    <div className={classes.google}>
                            <GoogleLogin 
                            clientId="897389787521-pqme3iu23edjqdsobd2h6a0uiel4bcvq.apps.googleusercontent.com"
                            onSuccess={response}
                            onFailure={response}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
